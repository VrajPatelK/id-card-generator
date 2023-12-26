package com.example.pro.demo.controller;

//import com.example.pro.demo.Service.UserService;
import com.example.pro.demo.Exception.ResourceNotFoundException;
import com.example.pro.demo.Repositories.UserRepository;
import com.example.pro.demo.dto.ResponseDTO;
import com.example.pro.demo.dto.UserDto;
import com.example.pro.demo.mapper.UserMapper;
import com.example.pro.demo.model.*;
//import com.example.pro.demo.repository.StudentRepository;
import com.example.pro.demo.service.UserService;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@AllArgsConstructor
@EnableJpaRepositories
@RestController
public class  HomeController {

    @Autowired
    private UserService userService;

    @GetMapping("/test")
    public String hello(){
        return "hello priyanka";
    }

    //add user API
    @PostMapping("/create-user")
    public ResponseEntity<ResponseDTO> createUser(@RequestBody UserDto userDto,HttpSession session){
       return userService.createUser(userDto,session);
    }

    @GetMapping("/profile/{clgId}")
    public ResponseEntity<UserDto> getUserByClgId(@PathVariable("clgId") String clgId,HttpSession session) throws ResourceNotFoundException {
        return userService.getUserByClgId(clgId,session);
    }

    @PostMapping("/signin")
    public ResponseEntity<ResponseDTO> signIn(@RequestBody UserDto userDto,HttpServletRequest request){
          return userService.singIn(userDto,request);
    }
// heloo
    @PostMapping("/signout")
    public ResponseEntity<ResponseDTO> signOut(HttpSession session){
        return userService.signOut(session);
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<List<UserDto>> getAllUser(HttpSession session){
            return userService.getAll(session);
    }

}
