package com.paulo.onlinestorybook.controllers;

import com.paulo.onlinestorybook.domain.GetStoryResponse;
import com.paulo.onlinestorybook.domain.Stories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;
import java.util.Optional;

import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/v1/story")
public class StoryController {

    @GetMapping("/{title}")
    public ResponseEntity<GetStoryResponse> getStoryByBook(@PathVariable("title") Optional<String> title) {
        GetStoryResponse result = Stories.getStory(title);

        HttpStatus httpStatus = Objects.isNull(result.getStory()) ? NOT_FOUND : OK;

        return new ResponseEntity<>(result, httpStatus);
    }
}
