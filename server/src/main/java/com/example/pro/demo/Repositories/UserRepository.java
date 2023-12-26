package com.example.pro.demo.Repositories;

import com.example.pro.demo.model.UserType;
import com.example.pro.demo.model.Users;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Users,Integer> {
    // Query method to check if a user with the same clgId already exists
    Optional<Users> findByClgId(String clgId);
    List<Users> findByUserType(UserType userType);
}
