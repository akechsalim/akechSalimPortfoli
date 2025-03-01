package com.akechsalim.portfolio.service;

import com.akechsalim.portfolio.model.Post;
import com.akechsalim.portfolio.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAllByOrderByDateDesc();
    }

    public Post savePost(Post post) {
        return postRepository.save(post);
    }
}