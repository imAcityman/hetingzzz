package com.ct.hetingzzz.controller;

import com.ct.hetingzzz.domain.TMessageBoad;
import com.ct.hetingzzz.domain.TSysUser;
import com.ct.hetingzzz.service.TBigdateService;
import com.ct.hetingzzz.service.TMenstruationLogService;
import com.ct.hetingzzz.service.TMessageBoadService;
import com.ct.hetingzzz.service.UserService;
import com.ct.hetingzzz.util.Contants;
import com.ct.hetingzzz.util.ParamUtil;
import com.ct.hetingzzz.util.Response;
import com.ct.hetingzzz.util.ResponseStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {

    private Logger logger = LoggerFactory.getLogger(UserController.class);

    @Resource
    private UserService userService;
    @Resource
    private TBigdateService tBigdateService;
    @Resource
    private TMenstruationLogService tMenstruationLogService;
    @Resource
    private TMessageBoadService messageBoadService;

    @RequestMapping("getMenstruation")
    public Response getMenstruation() {
        long userid = Contants.getUserId();
        return new Response(ResponseStatus.SUCCESS, "查询成功", tMenstruationLogService.getMenstruation(userid));
    }

    @RequestMapping("setTodayMenstruation")
    public Response setTodayMenstruation() {
        long userid = Contants.getUserId();
        boolean result = userService.setMenstruation(userid);
        if (result) {
            return new Response(ResponseStatus.SUCCESS, "设置好了");
        }
        return new Response(ResponseStatus.FAIL, "你今天不是已经设置过了吗傻逼！");
    }

    @RequestMapping("getBigDate")
    public Response getBigDate() {
        long userid = Contants.getUserId();
        return new Response(ResponseStatus.SUCCESS, "查询成功", tBigdateService.getBigDate(userid));
    }

    @RequestMapping("getBoadMessage")
    public Response getBoadMessage() {
        return new Response(ResponseStatus.SUCCESS, "查询成功", messageBoadService.findAll());
    }

    @RequestMapping("deleteMessage")
    public Response deleteMessage(long id) {
        long userid = Contants.getUserId();
        messageBoadService.deleteMessage(id,userid);
        return new Response(ResponseStatus.SUCCESS, "删除成功");
    }

    @RequestMapping("leaveMessage")
    public Response leaveMessage(TMessageBoad messageBoad, Long replyid, Long targetuserid) {
        if (ParamUtil.isEmpty(messageBoad.getContent())) {
            return new Response(ResponseStatus.FAIL, "参数错误");
        }
        if (ParamUtil.isNotEmpty(replyid)) {
            TMessageBoad father = new TMessageBoad();
            father.setId(replyid);
            messageBoad.setFatherMessage(father);
        }
        if (ParamUtil.isNotEmpty(targetuserid)) {
            TSysUser targetUser = new TSysUser();
            targetUser.setId(targetuserid);
            messageBoad.setTargetuser(targetUser);
        }
        long userid = Contants.getUserId();
        TSysUser sysUser = new TSysUser();
        sysUser.setId(userid);
        messageBoad.setUser(sysUser);
        messageBoad.setCreatetime(new Date());
        messageBoad.setState(1);
        messageBoadService.save(messageBoad);
        return new Response(ResponseStatus.SUCCESS, "留言成功！");
    }

}
