package com.ums.service;

import java.util.List;

import com.ums.response.UserResponse;

public interface UserService {

	UserResponse addUser (UserResponse userResponse);
	
	List<UserResponse> getAllUsers();
	
	UserResponse getUserById(long id);
	
	UserResponse updateUser(UserResponse userResponse, long id);
	
	void deleteUser(long id);
}