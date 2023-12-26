package com.example.pro.demo.mapper;

import com.example.pro.demo.dto.UserDto;
import com.example.pro.demo.model.Users;

import java.util.ArrayList;
import java.util.List;

public class UserMapper {

    public static UserDto mapToUsersDto(Users user){
        return new UserDto(user.getUid(), user.getName(),
                user.getClgId(),user.getBranch(),
                user.getDegree(),user.getDepartment(),
                user.getUserType(),user.getBarcodeImg(),
                user.getProfileImg(),user.getPassword());
    }

    public static Users mapToUser(UserDto userDto){
        return new Users(userDto.getUid(),userDto.getName(),userDto.getClgId(),
                userDto.getBranch(),userDto.getDegree(),userDto.getDepartment(),
                userDto.getUserType(),userDto.getBarcodeImg(),
                userDto.getProfileImg(),userDto.getPassword());
    }


    public static List<UserDto> mapToUserDtoList(List<Users> usersList){
        List<UserDto> userDtoList=new ArrayList<>();
        for(Users u:usersList){
            userDtoList.add(new UserDto(u.getUid(),u.getName(),u.getClgId(),u.getBranch(),u.getDegree(),u.getDepartment(),u.getUserType(),
                    u.getBarcodeImg(),u.getProfileImg(),u.getPassword()));
        }
        return userDtoList;
    }
}
