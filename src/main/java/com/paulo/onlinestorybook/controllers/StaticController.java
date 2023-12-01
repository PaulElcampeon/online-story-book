package com.paulo.onlinestorybook.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StaticController {

    @GetMapping("/")
    public String getIndex() {
        return "index.html";
    }
    @GetMapping("/1")
    public String page1() {
        return "1.html";
    }
    @GetMapping("/2")
    public String page2() {
        return "2.html";
    }
    @GetMapping("/3")
    public String page3() {
        return "3.html";
    }
    @GetMapping("/4")
    public String page4() {
        return "4.html";
    }
}
