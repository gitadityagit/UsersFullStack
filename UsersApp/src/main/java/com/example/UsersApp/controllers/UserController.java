package com.example.UsersApp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.UsersApp.models.User;
import com.example.UsersApp.repo.UserRepo;

@RestController
@CrossOrigin(origins="")
public class UserController {
	@Autowired
	UserRepo userRepo;

	@RequestMapping("/")
	public String home() {
		return "welcome Users web application";
	}
	
	@PostMapping("/users")
	public void addStudent(@RequestBody User student) {
		userRepo.save(student);
	}
	
	@GetMapping("/users")
	public List<User> getAllStudents() {
		return userRepo.findAll();
	}
	
	@GetMapping("/users/{id}")
	public User getStudent(@PathVariable long id) {
		return userRepo.findById(id).orElse(null);
	}
	
	@PutMapping("/users/{id}")
	public User updateStudent(@PathVariable long id,@RequestBody User user) {
		userRepo.save(user);
		return user;
	}
	
	@DeleteMapping("/students/{id}")
	public User deleteStudent(@PathVariable long id) {
		
		User user=userRepo.findById(id).orElse(null);
		userRepo.deleteById(id);
		return user;
		
	}
}
