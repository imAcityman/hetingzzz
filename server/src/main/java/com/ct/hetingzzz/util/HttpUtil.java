package com.ct.hetingzzz.util;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.ParseException;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import static com.ct.hetingzzz.util.CommonParams.TOKEN_NAME;

public class HttpUtil {

    public static Response post(ArrayList<NameValuePair> params, String url) {
        HttpPost httpPost = new HttpPost(url);
        String result = "";
        try {
            httpPost.setEntity(new UrlEncodedFormEntity(params, HTTP.UTF_8));
            httpPost.addHeader("Content-Type", "application/x-www-form-urlencoded");
            RequestConfig config = RequestConfig.custom().setConnectionRequestTimeout(5000).setConnectTimeout(5000).build();
            httpPost.setConfig(config);
            HttpResponse httpResponse = new DefaultHttpClient().execute(httpPost);
            if (httpResponse.getStatusLine().getStatusCode() == 200) {//如果状态码为200,就是正常返回
                result = EntityUtils.toString(httpResponse.getEntity());
            } else {
                return new Response(ResponseStatus.ERROR,"远程服务器请求异常");
            }
        } catch (Exception e) {
            return new Response(ResponseStatus.ERROR, "服务器开小差了");
        }
        return new Response(ResponseStatus.SUCCESS,"",new JSONObject(result));
    }

    /**
     * http请求
     *
     * @return
     */
    public static Response get(String url) {
        String result = null;
        CloseableHttpClient httpclient = HttpClients.createDefault();
        try {
            HttpGet httpget = new HttpGet(url);
            CloseableHttpResponse response = httpclient.execute(httpget);
            HttpEntity entity = response.getEntity();
            result = EntityUtils.toString(entity);
            response.close();
        } catch (ParseException | IOException e) {
            e.printStackTrace();
        } finally {
            try {
                httpclient.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return new Response(ResponseStatus.SUCCESS,"",new JSONObject(result));
    }

    /**
     * 获取指定cookie
     *
     * @return
     */
    public static String getCookie(HttpServletRequest request, String key) {
        Cookie[] cookies = request.getCookies();//这样便可以获取一个cookie数组
        if (null == cookies) return null;
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals(key)) {
                return cookie.getValue();
            }
        }
        return null;
    }

    /**
     * 获取头信息
     *
     * @return
     */
    public static Map<String, String> getHeadersInfo() {
        HttpServletRequest request = getRequest();
        Map<String, String> map = new HashMap<String, String>();
        Enumeration headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String key = (String) headerNames.nextElement();
            String value = request.getHeader(key);
            map.put(key, value);
        }
        return map;
    }

    /**
     * 获取用户ip
     *
     * @return
     */
    public static String getClientIp() {
        HttpServletRequest request = getRequest();
        String ip = request.getHeader("x-forwarded-for");
        if (null == ip) ip = "no ip found";
        return ip;
    }

    public static HttpServletRequest getRequest() {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder
                .currentRequestAttributes();
        return attributes.getRequest();
    }

    public static HttpServletResponse getResponse() {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder
                .currentRequestAttributes();
        return attributes.getResponse();
    }

    public static String getToken() {
        HttpServletRequest request = getRequest();
        String token = request.getHeader(TOKEN_NAME);
        if (ParamUtil.isNotEmpty(token)) return token;
        return request.getParameter(TOKEN_NAME);
    }
}
