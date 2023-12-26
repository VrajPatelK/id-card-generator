package com.example.pro.demo.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table
public class Student {

    @Id
    private int sid;
    private int mark;
    private String name;

    @ManyToOne
    @JoinColumn(name = "id")
    private subject subject;
}
