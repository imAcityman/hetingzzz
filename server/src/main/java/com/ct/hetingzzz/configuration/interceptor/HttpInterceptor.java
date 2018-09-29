package com.ct.hetingzzz.configuration.interceptor;

import com.ct.hetingzzz.configuration.JWT.JWT;
import com.ct.hetingzzz.domain.LoginUser;
import com.ct.hetingzzz.util.HttpUtil;
import com.ct.hetingzzz.util.ParamUtil;
import org.apache.http.HttpStatus;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HttpInterceptor implements HandlerInterceptor {


    //在请求处理之前进行调用（Controller方法调用之前
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
        String token = HttpUtil.getToken();
        //登录失效
        if (ParamUtil.isEmpty(token)) {
            response.setStatus(HttpStatus.SC_UNAUTHORIZED);
            return false;
        }
        LoginUser loginUser = JWT.unsign(token, LoginUser.class);
        //登录失效
        if (null == loginUser) {
            response.setStatus(HttpStatus.SC_UNAUTHORIZED);
            return false;
        }
        //todo:权限验证
        String servletPath = request.getServletPath();
        return true;
    }

    //请求处理之后进行调用，但是在视图被渲染之前（Controller方法调用之后）
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object o, ModelAndView modelAndView) throws Exception {

    }

    //在整个请求结束之后被调用，也就是在DispatcherServlet 渲染了对应的视图之后执行（主要是用于进行资源清理工作）
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object o, Exception e) throws Exception {

    }

}