package com.ct.hetingzzz.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;
import java.util.UUID;

/**
 * Created by wjh on 2017/2/18.
 */
public class SecretUtil {
    private static final String salt="2017yzlc-com.yzch.mch";
    public static String toSha256String(String str){
        StringBuilder builder=new StringBuilder();
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] shabty=md.digest(str.getBytes());
            for (byte b : shabty){
                builder.append(Integer.toHexString(b&0xff));
            }
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return builder.toString();
    }

   public static String getShaPassword(String loginid,String pasword){
        return toSha256String(loginid+pasword+salt);
   }

    public static void main(String[] args) {
        System.out.println(UUID.randomUUID());
    }

    public static final String defaultPassword="123456";
}
