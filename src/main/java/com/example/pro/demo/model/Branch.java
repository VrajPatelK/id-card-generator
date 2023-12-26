package com.example.pro.demo.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "Branch", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"name"}),
        @UniqueConstraint(columnNames = {"value"})
})
@NoArgsConstructor
@AllArgsConstructor
public class Branch {

    @Id
    private  int bId;

    private String name;
    private String value;


}
