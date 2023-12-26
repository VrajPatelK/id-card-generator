package com.example.pro.demo.service;

import com.example.pro.demo.Exception.ResourceNotFoundException;
import com.example.pro.demo.Repositories.UserRepository;
import com.example.pro.demo.dto.ResponseDTO;
import com.example.pro.demo.dto.UserDto;
import com.example.pro.demo.mapper.UserMapper;
import com.example.pro.demo.model.*;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;
import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
@AllArgsConstructor
//@EnableJpaRepositories(basePackages = "com.example.pro.demo.Repositories.UserRepository")
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailSenderService senderService;

//    @Bean
//    @Primary
//    @Autowired
//    public UserServiceImpl UserServiceImpl(UserRepository repository) {
//        return new UserServiceImpl(repository);
//    }

    @PersistenceContext
    private EntityManager entityManager;

    public UserServiceImpl(UserRepository repository) {
        this.userRepository = repository;
    }




    @Override
    public ResponseEntity<ResponseDTO>  createUser(UserDto userDto,HttpSession session) {
        if(session.getAttribute("clgId")!=null && session.getAttribute("userType")!=null) {
            String cId = (String) session.getAttribute("clgId");
            UserType uType = (UserType) session.getAttribute("userType");
            Users user= UserMapper.mapToUser(userDto);
            if((uType.getName().equals("teacher") && user.getUserType().getName().equals("student")) ||
                    (uType.getName().equals("admin"))) {
                String password;
                try {
                    Optional<Users> optionalUser = userRepository.findByClgId(user.getClgId());
                    if (optionalUser.isPresent()) {
                        return new ResponseEntity<>(new ResponseDTO(null
                                ,"User already exist"),HttpStatus.CREATED);
                    }

                    // Check if the branch with the same name already exists
                    Query query = entityManager.createQuery("SELECT b FROM Branch b WHERE b.name = :branchName")
                            .setParameter("branchName", user.getBranch().getName());
                    Branch existingBranch = (Branch) query.getSingleResult();
                    // If the branch exists, use the existing one
                    user.setBranch(existingBranch);

                    query = entityManager.createQuery("SELECT d FROM Department d WHERE d.name = :dName")
                            .setParameter("dName", user.getDepartment().getName());
                    Department existingDepartment = (Department) query.getSingleResult();
                    // If the department exists, use the existing one
                    user.setDepartment(existingDepartment);

                    query = entityManager.createQuery("SELECT u FROM UserType u WHERE u.name = :uName")
                            .setParameter("uName", user.getUserType().getName());
                    UserType existingUserType = (UserType) query.getSingleResult();
                    // If the userType exists, use the existing one
                    user.setUserType(existingUserType);

                    query = entityManager.createQuery("SELECT d FROM Degree d WHERE d.name = :dName")
                            .setParameter("dName", user.getDegree().getName());
                    Degree existingDegree = (Degree) query.getSingleResult();
                    System.out.println("existing degree:" + existingDegree);
                    // If the degree exists, use the existing one
                    user.setDegree(existingDegree);
                    password=this.generatePassword(10);
                    System.out.println("generated password "+password);

                   String  encryptPassword=this.encryptPassword(password);
                    System.out.println("encrypted password "+encryptPassword);
                    user.setPassword(encryptPassword);
                } catch (Exception e) {
                    // Handle other exceptions if necessary
                    System.err.println("Error checking for existing branch: " + e.getMessage());
                }

                Users savedUser =(Users) userRepository.save(user);
                System.out.println("printing saved user:");
                System.out.println(savedUser);

                String response="Your IdCard Password is:"+this.decryptPassword(savedUser.getPassword())+"\n"+"\n" +
                                  "  User details are as below "+"\n"+
                                  "Name: "+savedUser.getName()+"\n"+
                        "College ID: "+savedUser.getClgId()+"\n"+
                        "Branch: "+savedUser.getBranch().getName()+"\n"+
                        "Degree: "+savedUser.getDegree().getName()+"\n"+
                        "Department: "+savedUser.getDepartment().getName()+"\n"+
                        "UserType: "+savedUser.getUserType().getName()+"\n";
                System.out.println(response);
                String toEmail=savedUser.getClgId().toLowerCase()+"@ddu.ac.in";
                System.out.println("toEmail"+ toEmail);
                String subject="User Information";
                String body=response;
                senderService.sendEmail(toEmail,subject,body);
                return new ResponseEntity<>(new ResponseDTO("User added successfully",null),HttpStatus.CREATED);
            }
            else{
                if(uType.getName().equals("student"))
                    return new ResponseEntity<>(new ResponseDTO(null,"Student can not create ID of others"),HttpStatus.UNAUTHORIZED);
                else if(uType.getName().equals("teacher") && (user.getUserType().getName().equals("teacher") || user.getUserType().getName().equals("admin")))
                    return new ResponseEntity<>(new ResponseDTO(null,"Teacher can not create ID of other teachers or admin"),HttpStatus.UNAUTHORIZED);
            }
        }
        else{
            return new ResponseEntity<>(new ResponseDTO(null,"Please sign in first"),HttpStatus.BAD_REQUEST);
        }
        return  null;
    }

    public  String encryptPassword(String password) {
        int shift = 3;
        StringBuilder encryptedPassword = new StringBuilder();
        for (char ch : password.toCharArray()) {
            if (Character.isLetter(ch)) {
                char base = Character.isUpperCase(ch) ? 'A' : 'a';
                char encryptedChar = (char) ((ch - base + shift) % 26 + base);
                encryptedPassword.append(encryptedChar);
            } else {
                encryptedPassword.append(ch);
            }
        }
        return encryptedPassword.toString();
    }

    public String decryptPassword(String encryptedPassword) {
        int shift = 3;
        StringBuilder decryptedPassword = new StringBuilder();
        for (char ch : encryptedPassword.toCharArray()) {
            if (Character.isLetter(ch)) {
                char base = Character.isUpperCase(ch) ? 'A' : 'a';
                char decryptedChar = (char) ((ch - base - shift + 26) % 26 + base);
                decryptedPassword.append(decryptedChar);
            } else {
                decryptedPassword.append(ch);
            }
        }
        return decryptedPassword.toString();
    }

    public String generatePassword(int length) {
        String characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        StringBuilder password = new StringBuilder();
        SecureRandom random = new SecureRandom();
        for (int i = 0; i < length; i++) {
            int randomIndex = random.nextInt(characters.length());
            password.append(characters.charAt(randomIndex));
        }
        return password.toString();
    }


    @Override
    public ResponseEntity<UserDto> getUserByClgId(String clgId, HttpSession session) throws ResourceNotFoundException {
        if(session.getAttribute("clgId")!=null && session.getAttribute("userType")!=null){
            String cId = (String) session.getAttribute("clgId");
            UserType uType = (UserType) session.getAttribute("userType");

            if(clgId.equals(cId)||(uType.getName().equals("teacher") || uType.getName().equals("admin"))){
                Optional<Users> optionalUser=userRepository.findByClgId(clgId);
                Users user=optionalUser.orElseThrow(()->new ResourceNotFoundException("User with college Id does not exist"));
                return new ResponseEntity<>(UserMapper.mapToUsersDto(user),HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>(null,HttpStatus.UNAUTHORIZED);
            }
        }
        else
          return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
    }


    @Override
    public ResponseEntity<ResponseDTO> singIn(UserDto userDto, HttpServletRequest request) throws ResourceNotFoundException {
        Users user=UserMapper.mapToUser(userDto);
        Optional<Users> optionalUser=userRepository.findByClgId(user.getClgId());
        Users founduser=optionalUser.orElseThrow(()->new ResourceNotFoundException("User with college Id does not exist"));
        String decryptedPassword=this.decryptPassword(founduser.getPassword());
        System.out.println("decrypted password "+decryptedPassword);
        if(decryptedPassword.equals(user.getPassword()) && (founduser.getUserType().getName().equals(user.getUserType().getName()))){
            HttpSession session=request.getSession();
            session.setAttribute("clgId",user.getClgId());
            session.setAttribute("userType",user.getUserType());
            return new ResponseEntity<>(new ResponseDTO("Successfully signed in",null), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(new ResponseDTO(null,"Invalid credentials"),HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<ResponseDTO> signOut(HttpSession session){
        if(session.getAttribute("clgId")!=null && session.getAttribute("userType")!=null){
            System.out.println("session is not null");
            session.invalidate();
            return new ResponseEntity<>(new ResponseDTO("Successfully signed out",null),HttpStatus.OK);
        }
        else
        return new ResponseEntity<>(new ResponseDTO(null,"Please sign in first"),HttpStatus.BAD_REQUEST);
    }

    @Override
    public  ResponseEntity<List<UserDto>>  getAll(HttpSession session) {
        if(session.getAttribute("clgId")!=null && session.getAttribute("userType")!=null){
            UserType userType=(UserType) session.getAttribute("userType");

            if(userType.getName().equals("admin")||(userType.getName().equals("teacher"))){

                if(userType.getName().equals("admin")){
                    List<Users> usersList=userRepository.findAll();
                    if(usersList.isEmpty()) throw new ResourceNotFoundException("No users found");
                    List<UserDto> userDtoList=UserMapper.mapToUserDtoList(usersList);
                    return new ResponseEntity<>(userDtoList,HttpStatus.OK);
                }
                else {
                    UserType userType1=new UserType();
                    userType1.setUTId(1);
                    userType1.setName("student");
                    userType1.setValue("student");
                    List<Users> usersList=userRepository.findByUserType(userType1);
                    if(usersList.isEmpty()) throw new ResourceNotFoundException("No users found");
                    List<UserDto> userDtoList=UserMapper.mapToUserDtoList(usersList);
                    return new ResponseEntity<>(userDtoList,HttpStatus.OK);
                }
            }
            else{
                return  new ResponseEntity<>(null,HttpStatus.UNAUTHORIZED);
            }
        }
        System.out.println("outside session");
        return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
    }


}
