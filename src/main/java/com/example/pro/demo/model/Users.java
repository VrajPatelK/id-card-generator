package com.example.pro.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int uid;
    private String name;
    private String clgId;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="bId")
    private Branch branch;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="dId")
    private Degree degree;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="depId")
    private Department department;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="uTId")
    private UserType userType;


    private String barcodeImg;
    private String profileImg;
    private String password;



}
