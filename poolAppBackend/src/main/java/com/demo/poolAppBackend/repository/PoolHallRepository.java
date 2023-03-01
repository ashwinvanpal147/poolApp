package com.demo.poolAppBackend.repository;

import com.demo.poolAppBackend.model.PoolHall;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PoolHallRepository extends JpaRepository<PoolHall, String> {
}
