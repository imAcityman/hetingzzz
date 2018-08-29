package com.ct.hetingzzz.configuration.interceptor;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.LinkedList;
import java.util.List;

//mvc控制器
@Configuration
public class WebMvcConfigurer extends WebMvcConfigurerAdapter {

    private static List<String> excludePattens = new LinkedList<>();

    static {
        excludePattens.add("/auth/**");
    }

    @Bean
    public HttpInterceptor httpInterceptor() {
        return new HttpInterceptor();
    }

    //增加拦截器
    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(httpInterceptor())//指定拦截器类
                .addPathPatterns("/**").excludePathPatterns(excludePattens);//指定该类拦截的url
    }
}
