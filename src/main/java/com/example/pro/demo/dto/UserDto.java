package com.example.pro.demo.dto;

import com.example.pro.demo.model.Branch;
import com.example.pro.demo.model.Degree;
import com.example.pro.demo.model.Department;
import com.example.pro.demo.model.UserType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private int uid;
    private String name;
    private String clgId;
    private Branch branch;
    private Degree degree;
    private Department department;
    private UserType userType;
    private String barcodeImg;
    private String profileImg;
    private String password;
}
