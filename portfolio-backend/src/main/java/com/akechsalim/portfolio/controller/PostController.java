package com.akechsalim.portfolio.controller;

import com.akechsalim.portfolio.model.Post;
import com.akechsalim.portfolio.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @PostMapping
    public Post savePost(@RequestBody Post post) {
        return postService.savePost(post);
    }
}