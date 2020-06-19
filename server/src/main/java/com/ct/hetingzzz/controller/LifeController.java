package com.ct.hetingzzz.controller;

import com.ct.hetingzzz.service.LifeService;
import com.ct.hetingzzz.util.Response;
import com.ct.hetingzzz.util.ResponseStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RequestMapping("life")
@RestController
public class LifeController {

    @Resource
    private LifeService lifeService;

    @RequestMapping("getOilInfo")
    public Response getOilInfo() {
        return new Response(ResponseStatus.SUCCESS, "查询成功", lifeService.getLatestInfo());
    }
}
