package com.ct.hetingzzz.controller;

import com.ct.hetingzzz.service.TBigdateService;
import com.ct.hetingzzz.service.TMenstruationLogService;
import com.ct.hetingzzz.service.UserService;
import com.ct.hetingzzz.util.Contants;
import com.ct.hetingzzz.util.Response;
import com.ct.hetingzzz.util.ResponseStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("user")
public class UserController {


    @Resource
    private UserService userService;
    @Resource
    private TBigdateService tBigdateService;
    @Resource
    private TMenstruationLogService tMenstruationLogService;

    @RequestMapping("getMenstruation")
    public Response getMenstruation() {
        long userid = Contants.getUserId();
        return new Response(ResponseStatus.SUCCESS, "查询成功", tMenstruationLogService.getMenstruation(userid));
    }

    @RequestMapping("setTodayMenstruation")
    public Response setTodayMenstruation() {
        long userid = Contants.getUserId();
        boolean result = userService.setMenstruation(userid);
        if (result) {
            return new Response(ResponseStatus.SUCCESS, "设置好了");
        }
        return new Response(ResponseStatus.FAIL, "你今天不是已经设置过了吗傻逼！");
    }

    @RequestMapping("getBigDate")
    public Response getBigDate() {
        long userid = Contants.getUserId();
        return new Response(ResponseStatus.SUCCESS, "查询成功", tBigdateService.getBigDate(userid));
    }

}
