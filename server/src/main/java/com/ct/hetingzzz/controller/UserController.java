package com.ct.hetingzzz.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("heting")
public class UserController {

    @RequestMapping("ruozhi")
    public String ruozhi(){
        return "<h1>何婷是个大弱智</h1>";
    }
}
