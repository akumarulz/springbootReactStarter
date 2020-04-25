package com.reactjs.ex.reactproject.controllers;

import com.reactjs.ex.reactproject.controllers.uirespones.PageResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {

    @GetMapping(value = "/test")
    public String index(){
        return "index";
    }

    @ResponseBody
    @GetMapping(value="/page1")
    public PageResponse getMethodName() {
        PageResponse response = new PageResponse();
        response.setSuccess(true);
        return response;
    }
    
}