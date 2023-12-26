package com.example.pro.demo.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "UserType", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"name"}),
        @UniqueConstraint(columnNames = {"value"})
})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserType {
    @Id
    private int uTId;
    private String name;
    private String value;


}
