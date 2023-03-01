package com.demo.poolAppBackend.controller;

import com.demo.poolAppBackend.model.PoolHall;
import com.demo.poolAppBackend.model.PoolHallsDTO;
import com.demo.poolAppBackend.repository.PoolHallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("poolhall")
@CrossOrigin(origins = {"http://localhost:3000/"})
public class PoolHallController {

    @Autowired
    PoolHallRepository repository;

    @GetMapping
    public ResponseEntity<PoolHallsDTO> getAll() {
        return ResponseEntity.ok(new PoolHallsDTO(repository.findAll()));
    }

    @GetMapping
    @RequestMapping("add")
    public ResponseEntity<PoolHall> addPoolHall() {
        PoolHall poolHall = PoolHall.builder()
                .name("Cues")
                .address("Canton")
                .numberOfTables(2)
                .build();

        return ResponseEntity.ok(repository.save(poolHall));
    }
}
