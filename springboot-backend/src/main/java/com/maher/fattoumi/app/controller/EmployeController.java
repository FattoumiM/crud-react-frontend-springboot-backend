package com.maher.fattoumi.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.maher.fattoumi.app.exception.ResourceNotFoundException;
import com.maher.fattoumi.app.model.Employe;
import com.maher.fattoumi.app.repository.EmployeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeController {

	@Autowired
	private EmployeRepository employeRepository;

	@GetMapping("/employes")
	public List<Employe> getAllEmployes() {
		return employeRepository.findAll();
	}

	@PostMapping("/employes")
	public Employe createEmploye(@RequestBody Employe employe) {
		return employeRepository.save(employe);
	}

	@GetMapping("/employes/{id}")
	public ResponseEntity<Employe> getEmployeById(@PathVariable Long id) {
		Employe employe = employeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employe not exist id :" + id));
		
		return ResponseEntity.ok(employe);
	}

	@PutMapping("/employes/{id}")
	public ResponseEntity<Employe> updateEmploye(@PathVariable Long id, @RequestBody Employe employeDetails) {
		Employe employe = employeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employe not exist id :" + id));

		employe.setNom(employeDetails.getNom());
		employe.setPrenom(employeDetails.getPrenom());
		employe.setDateNaissance(employeDetails.getDateNaissance());
		employe.setEmail(employeDetails.getEmail());
		employe.setTelephone(employeDetails.getTelephone());

		Employe updatedEmploye = employeRepository.save(employe);
		
		return ResponseEntity.ok(updatedEmploye);
	}

	@DeleteMapping("/employes/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmploye(@PathVariable Long id) {
		Employe employe = employeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employe not exist id :" + id));

		employeRepository.delete(employe);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}

}
