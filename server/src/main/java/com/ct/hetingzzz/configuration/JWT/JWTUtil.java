package com.ct.hetingzzz.configuration.JWT;

import com.ct.hetingzzz.domain.LoginUser;
import com.ct.hetingzzz.util.HttpUtil;

public class JWTUtil {

    public LoginUser getCurrentUser (){
        String token = HttpUtil.getToken();
        return JWT.unsign(token, LoginUser.class);
    }
}
