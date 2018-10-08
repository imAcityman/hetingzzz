package com.ct.hetingzzz.util;

import javax.servlet.http.HttpServletRequest;

public class Contants {

    public static long getUserId(){
        HttpServletRequest request = HttpUtil.getRequest();
        return Long.valueOf(request.getHeader("userid"));
    }
}
