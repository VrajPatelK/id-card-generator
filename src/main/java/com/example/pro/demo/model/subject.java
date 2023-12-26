package com.example.pro.demo.model;

import com.example.pro.demo.model.Student;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table
public class subject {

    @Id
    private int id;
    private String subname;

}
