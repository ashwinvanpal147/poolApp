package com.demo.poolAppBackend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "POOLHALL")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PoolHall {

    @Id
    @Column(name = "NAME")
    private String name;
    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "NUMBEROFTABLES")
    private Integer numberOfTables;
}
