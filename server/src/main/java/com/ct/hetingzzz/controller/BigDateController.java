package com.ct.hetingzzz.controller;

import com.ct.hetingzzz.domain.TBigdate;
import com.ct.hetingzzz.service.TBigdateService;
import com.ct.hetingzzz.util.Contants;
import com.ct.hetingzzz.util.Response;
import com.ct.hetingzzz.util.ResponseStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.Date;

@RequestMapping("bigdate")
@RestController
public class BigDateController {

    @Resource
    private TBigdateService tBigdateService;


    @RequestMapping("getBigDate")
    public Response getBigDate() {
        long userid = Contants.getUserId();
        return new Response(ResponseStatus.SUCCESS, "查询成功", tBigdateService.getBigDate(userid));
    }

    @RequestMapping("add")
    public Response add(TBigdate bigdate) {
        bigdate.setCreatetime(new Timestamp(new Date().getTime()));
        bigdate.setUserid(Contants.getUserId());
        tBigdateService.add(bigdate);
        return new Response(ResponseStatus.SUCCESS, "新增成功");
    }

    @RequestMapping("update")
    public Response update(TBigdate bigdate) {
        tBigdateService.update(bigdate);
        return new Response(ResponseStatus.SUCCESS, "修改成功");
    }

    @RequestMapping("delete")
    public Response delete(Long dateId) {
        tBigdateService.delete(dateId);
        return new Response(ResponseStatus.SUCCESS, "删除成功");
    }
}
