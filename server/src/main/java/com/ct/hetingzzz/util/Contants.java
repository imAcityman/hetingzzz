package com.ct.hetingzzz.util;

import javax.servlet.http.HttpServletRequest;

public class Contants {

    public static Integer getUserId(){
        HttpServletRequest request = HttpUtil.getRequest();
        return Integer.valueOf(request.getHeader("userid"));
    }
}
