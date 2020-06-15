package com.ct.hetingzzz.controller;

import com.ct.hetingzzz.domain.Pagination;
import com.ct.hetingzzz.domain.TMessageBoad;
import com.ct.hetingzzz.domain.TSysUser;
import com.ct.hetingzzz.service.TMessageBoadService;
import com.ct.hetingzzz.util.Contants;
import com.ct.hetingzzz.util.ParamUtil;
import com.ct.hetingzzz.util.Response;
import com.ct.hetingzzz.util.ResponseStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Date;

@RequestMapping("board")
@RestController
public class BoardController {

    @Resource
    private TMessageBoadService messageBoadService;

    @RequestMapping("getBoadMessage")
    public Response getBoadMessage(Pagination pagination) {
        return new Response(ResponseStatus.SUCCESS, "查询成功", messageBoadService.getMessage(pagination).getContent());
    }

    @RequestMapping("deleteMessage")
    public Response deleteMessage(long id) {
        long userid = Contants.getUserId();
        messageBoadService.deleteMessage(id, userid);
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
