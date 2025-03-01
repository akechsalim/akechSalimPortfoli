package com.akechsalim.portfolio.service;

import com.akechsalim.portfolio.model.Profile;
import com.akechsalim.portfolio.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public Profile getProfile() {
        // Assuming a single profile with ID 1
        return profileRepository.findById(1L)
                .orElseThrow(() -> new RuntimeException("Profile not found"));
    }

    public Profile saveProfile(Profile profile) {
        return profileRepository.save(profile);
    }
}