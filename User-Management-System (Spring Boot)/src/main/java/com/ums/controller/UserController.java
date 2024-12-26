package com.ums.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ums.response.UserResponse;
import com.ums.service.UserService;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping
	ResponseEntity<List<UserResponse>> getAllUsers(){
		
		return new ResponseEntity<List<UserResponse>>(userService.getAllUsers(),HttpStatus.OK);
	}
	
	@PostMapping
	ResponseEntity<UserResponse> addUser(@RequestBody UserResponse userResponse)
	{
		return new ResponseEntity<UserResponse>(userService.addUser(userResponse),HttpStatus.CREATED);
	}
	
	@GetMapping("/{id}")
	ResponseEntity<UserResponse> getUserById(@PathVariable long id)
	{
		return new ResponseEntity<UserResponse>(userService.getUserById(id),HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	ResponseEntity<UserResponse> updateUser(@RequestBody UserResponse userResponse,@PathVariable long id)
	{
		return new ResponseEntity<UserResponse>(userService.updateUser(userResponse,id),HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	void deleteUser(@PathVariable long id)
	{
		userService.deleteUser(id);
	}
}