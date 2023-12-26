package com.example.pro.demo.Exception;

import com.example.pro.demo.dto.ResponseDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ResponseDTO> resourceNotFoundExceptionHandler(ResourceNotFoundException ex){
        String message= ex.getMessage();
        ResponseDTO responseDTO=new ResponseDTO(null,"User not found with given college Id");
        return new ResponseEntity<ResponseDTO>(responseDTO,HttpStatus.NOT_FOUND);
    }
}
