package com.ct.hetingzzz.controller;

import com.ct.hetingzzz.domain.TSysUser;
import com.ct.hetingzzz.service.UserService;
import com.ct.hetingzzz.util.Response;
import com.ct.hetingzzz.util.ResponseStatus;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

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

    @RequestMapping("setTodayMenstruation")
    public Response setTodayMenstruation(){
        if(userService.todayIsSet(userid)){
            return new Response(ResponseStatus.FAIL,"你今天不是已经设置过了吗傻逼！");
        }
        userService.setTodayMenstruation(userid);
        return new Response(ResponseStatus.SUCCESS,"设置好了");
    }
}
