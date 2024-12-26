package com.ums.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ums.entity.User;
import com.ums.exception.UserNotFoundException;
import com.ums.repository.UserRepository;
import com.ums.response.UserResponse;
import com.ums.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public UserResponse addUser(UserResponse userResponse) {
		
		User user=modelMapper.map(userResponse,User.class);
		User savedUser=userRepository.save(user);
		
		return  modelMapper.map(savedUser,UserResponse.class);
	}

	@Override
	public List<UserResponse> getAllUsers() {
		
		List<User> userList=userRepository.findAll();
		List<UserResponse> userResponseList=userList.stream().map(user->modelMapper.map(user,UserResponse.class)).collect(Collectors.toList());
	    return userResponseList;
	}

	@Override
	public UserResponse getUserById(long id) {
		
		User user=userRepository.findById(id).orElseThrow(()->new UserNotFoundException("User not found with id: "+id));
	
		return modelMapper.map(user,UserResponse.class);
	}

	@Override
	public UserResponse updateUser(UserResponse userResponse, long id) {
	
		User user=modelMapper.map(userResponse,User.class);
		User updatedUser=userRepository.findById(id).orElseThrow(()->new UserNotFoundException("User not found with id: "+id));
	    updatedUser.setName(user.getName());
	    updatedUser.setEmail(user.getEmail());
	    updatedUser.setAge(user.getAge());
	
	    User newUpdatedUser= userRepository.save(updatedUser);

	    return  modelMapper.map(newUpdatedUser,UserResponse.class);
	}

	@Override
	public void deleteUser(long id) {
		
		User user=userRepository.findById(id).orElseThrow(()->new UserNotFoundException("User not found with id: "+id));
		userRepository.delete(user);
	}
}