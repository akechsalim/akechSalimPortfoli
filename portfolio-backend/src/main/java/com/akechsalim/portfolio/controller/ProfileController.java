package com.akechsalim.portfolio.controller;

import com.akechsalim.portfolio.model.Profile;
import com.akechsalim.portfolio.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "http://localhost:3000") // Enable CORS for React frontend
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping
    public Profile getProfile() {
        return profileService.getProfile();
    }

    @PostMapping
    public Profile saveProfile(@RequestBody Profile profile) {
        return profileService.saveProfile(profile);
    }
}