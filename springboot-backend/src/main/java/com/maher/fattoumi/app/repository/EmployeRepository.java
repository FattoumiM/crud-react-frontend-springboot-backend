package com.maher.fattoumi.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.maher.fattoumi.app.model.Employe;

@Repository
public interface EmployeRepository extends JpaRepository<Employe, Long>{

}
