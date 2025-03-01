package com.akechsalim.portfolio.model;

import lombok.Data;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "projects")
@Data
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;       // e.g., "Portfolio Website"
    private String description; // e.g., "A sleek portfolio built with Spring and React"
    private String link;        // e.g., "https://github.com/akechsalim/portfolio"
    private String imageUrl;    // e.g., "https://example.com/project-image.jpg"
}