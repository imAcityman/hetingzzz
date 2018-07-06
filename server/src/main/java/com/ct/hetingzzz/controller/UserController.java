package com.ct.hetingzzz.controller;

import com.ct.hetingzzz.service.UserService;
import com.ct.hetingzzz.util.Response;
import com.ct.hetingzzz.util.ResponseStatus;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("user")
public class UserController {

    @Value("${userid}")
    private String userid;

    @Resource
    private UserService userService;

    @RequestMapping("getMenstruation")
    public Response getMenstruation(){
        return new Response(ResponseStatus.SUCCESS,"查询成功",userService.getMenstruation(userid));
    }
}
