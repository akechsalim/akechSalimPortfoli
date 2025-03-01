package com.akechsalim.portfolio.model;

import lombok.Data;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "profile")
@Data
public class Profile {

    @Id
    private Long id; // Unique ID (e.g., 1 for your profile)

    private String name;        // e.g., "Akech Salim"
    private String tagline;     // e.g., "Java & React Developer"
    private String email;       // e.g., "akechsalim@example.com" (for contact/footer)
    private String twitter;     // e.g., "https://x.com/akechsalim_" (footer social link)
    private String github;      // e.g., "https://github.com/akechsalim" (footer social link)
    private String linkedin;    // e.g., "https://linkedin.com/in/akechsalim" (footer social link)
}