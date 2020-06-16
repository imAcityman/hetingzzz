package com.ct.hetingzzz.controller;


import com.ct.hetingzzz.domain.TSysUser;
import com.ct.hetingzzz.service.UserService;
import com.ct.hetingzzz.util.Contants;
import com.ct.hetingzzz.util.Response;
import com.ct.hetingzzz.util.ResponseStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RequestMapping("mime")
@RestController
public class MimeController {

    @Resource
    private UserService userService;

    @RequestMapping("getUserInfo")
    public Response getUserInfo() {
        TSysUser tSysUser = userService.getUserById(Contants.getUserId());
        return new Response(ResponseStatus.SUCCESS, "查询成功", tSysUser);
    }
}
