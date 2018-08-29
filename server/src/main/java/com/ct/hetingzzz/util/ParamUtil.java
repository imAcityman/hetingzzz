package com.ct.hetingzzz.util;


import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2016/3/23.
 */

public class ParamUtil {

    /**
     * 参数判空
     */
    public static Boolean isEmpty(String param) {
        return param == null || param.equals("");
    }

    public static Boolean isEmpty(Long param) {
        return param == null;
    }

    public static Boolean isEmpty(Integer param) {
        return param == null;
    }

    public static Boolean isEmpty(Double param) {
        return param == null;
    }

    public static Boolean isEmpty(Object... objects) {
        for (Object object : objects) {
            if (null == object || object.toString().equals("")) return true;
        }
        return false;
    }

    /**
     * 参数判空
     */
    public static Boolean isNotEmpty(String param) {
        return param != null && !param.equals("");
    }

    public static Boolean isNotEmpty(Long param) {
        return param != null;
    }

    public static Boolean isNotEmpty(Integer param) {
        return param != null;
    }

    public static Boolean isNotEmpty(Double param) {
        return param != null;
    }

    public static Boolean isNotEmpty(Object... objects) {
        for (Object object : objects) {
            if (null == object || object.toString().equals("")) return false;
        }
        return true;
    }

    /**
     * lowercase map
     */
    public static HashMap getLowerCase(HashMap map) {
        HashMap result = new HashMap<>();
        for (Object o : map.entrySet()) {
            Map.Entry entry = (Map.Entry) o;
            Object key = entry.getKey();
            Object val = entry.getValue();
            result.put(key.toString().toLowerCase(), val);
        }
        return result;
    }

    /**
     * lowercase list map
     */
    public static List<HashMap> getLowerCase(List<HashMap<String, Object>> map) {
        List<HashMap> result = new LinkedList<>();
        for (HashMap o : map) {
            result.add(getLowerCase(o));
        }
        return result;
    }

    /**
     * arrays 2 string
     */
    public static String arrays2string(String[] arr) {
        return String.join(",", arr);
    }
}
