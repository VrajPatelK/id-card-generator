package com.example.pro.demo.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.repository.cdi.Eager;

@Entity
@Table(name = "Department", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"name"}),
        @UniqueConstraint(columnNames = {"value"})
})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Department {
    @Id
    private  int depId;

    private String name;
    private String value;


}
