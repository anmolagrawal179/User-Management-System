package com.ums.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ums.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {

}