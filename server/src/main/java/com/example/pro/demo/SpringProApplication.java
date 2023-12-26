package com.example.pro.demo;

import com.example.pro.demo.Repositories.UserRepository;
import com.example.pro.demo.service.EmailSenderService;
import jakarta.persistence.EntityManager;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.event.EventListener;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Data
@SpringBootApplication
@ComponentScan({ "com.example.pro.demo.*" })
@EnableJpaRepositories(basePackageClasses = UserRepository.class)
public class SpringProApplication {

	public static void main(String[] args) {SpringApplication.run(SpringProApplication.class, args);
	}


}
