package com.ct.hetingzzz.configuration.Exception;

import com.ct.hetingzzz.domain.TSysExceptionLog;
import com.ct.hetingzzz.service.SysexceptionlogService;
import com.ct.hetingzzz.util.HttpUtil;
import com.ct.hetingzzz.util.Response;
import com.ct.hetingzzz.util.ResponseStatus;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;


@ControllerAdvice
public class AllException {

    @Resource
    private SysexceptionlogService sysexceptionlogService;

    @ExceptionHandler(value=Exception.class)
    @ResponseBody
    public Response exception(Exception e, HttpServletResponse response){
        System.out.println("##################报错了#####################");
        e.printStackTrace();
        HttpServletRequest request = HttpUtil.getRequest();
        Map map = request.getParameterMap();
        HashMap<String,Object> paramsMap = new HashMap<>();
        paramsMap.putAll(map);
        TSysExceptionLog sysexceptionlog = new TSysExceptionLog();
//        sysexceptionlog.setParameter(gson.toJson(paramsMap));
//        sysexceptionlog.setStacktrace(gson.toJson(e.getStackTrace()));
//        sysexceptionlog.setHeader(gson.toJson(HttpUtil.getHeadersInfo()));
        sysexceptionlog.setType(1);
        sysexceptionlog.setCause(e.getCause().toString());

        HashMap<String,Object> operationInfo=new HashMap<>();
        String ip=request.getRemoteAddr();
        String host=request.getRemoteHost();
        int port=request.getRemotePort();
        String uri=request.getRequestURI();
        operationInfo.put("ip",ip);
        operationInfo.put("host",host);
        operationInfo.put("port",port);
        operationInfo.put("uri",uri);
        operationInfo.put("queryString",request.getQueryString());
        sysexceptionlog.setHeader(operationInfo.toString());
//        sysexceptionlogService.createException(sysexceptionlog);
        response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        return new Response(ResponseStatus.ERROR,"系统异常");
    }
}
