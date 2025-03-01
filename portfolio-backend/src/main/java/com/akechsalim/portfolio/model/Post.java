package com.akechsalim.portfolio.model;

import lombok.Data;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "posts")
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;      // e.g., "Building a Portfolio with React"
    private LocalDate date;    // e.g., "2025-03-01" (publication date)
    private String link;       // e.g., "https://medium.com/@akechsalim/post1"
    private String excerpt;    // e.g., "A short summary of the post..."
}