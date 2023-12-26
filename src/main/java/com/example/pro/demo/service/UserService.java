package com.example.pro.demo.service;

import com.example.pro.demo.Exception.ResourceNotFoundException;
import com.example.pro.demo.dto.ResponseDTO;
import com.example.pro.demo.dto.UserDto;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;

@Service
public interface UserService {
    ResponseEntity<ResponseDTO>  createUser(UserDto userDto,HttpSession session);
    ResponseEntity<UserDto> getUserByClgId(String clgId, HttpSession session) throws ResourceNotFoundException;
    ResponseEntity<ResponseDTO> singIn(UserDto userDto, HttpServletRequest request) throws ResourceNotFoundException;

    ResponseEntity<ResponseDTO> signOut(HttpSession session);
    ResponseEntity<List<UserDto>> getAll(HttpSession session);
}
