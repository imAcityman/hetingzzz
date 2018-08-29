package com.ct.hetingzzz.controller;

import com.ct.hetingzzz.configuration.JWT.JWT;
import com.ct.hetingzzz.domain.LoginUser;
import com.ct.hetingzzz.domain.TSysUser;
import com.ct.hetingzzz.service.UserService;
import com.ct.hetingzzz.util.ParamUtil;
import com.ct.hetingzzz.util.Response;
import com.ct.hetingzzz.util.ResponseStatus;
import com.ct.hetingzzz.util.SecretUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.HashMap;

import static com.ct.hetingzzz.util.CommonParams.TIME_OUT;

@RestController
@RequestMapping("auth")
public class AuthController {

    @Resource
    private UserService userService;

    @RequestMapping("login")
    public Response login(String loginid, String password) {
        if (ParamUtil.isEmpty(loginid, password)) {
            return new Response(ResponseStatus.FAIL, "参数错误");
        }
        TSysUser sysUser = userService.getUserByLoginid(loginid);
        if (null != sysUser && SecretUtil.getShaPassword(loginid, password).equals(sysUser.getPassword())) {
            LoginUser loginUser = new LoginUser();
            loginUser.setUserId(sysUser.getId());
            loginUser.setName(sysUser.getName());
            loginUser.setRoleId(sysUser.getRoleId());
            String token = JWT.sign(loginUser, TIME_OUT);
            HashMap<String,Object> map = new HashMap<>();
            map.put("token",token);
            map.put("userid",sysUser.getId());
            return new Response(ResponseStatus.SUCCESS,"登陆成功",map);
        } else {
            return new Response(ResponseStatus.FAIL, "到底记不记得帐号密码啊喂😠！");
        }
    }
}
