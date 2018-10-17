package com.ct.hetingzzz;

import com.ct.hetingzzz.domain.TBigdate;
import com.ct.hetingzzz.service.TBigdateService;
import com.ct.hetingzzz.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class HetingzzzApplicationTests {

    @Resource
    private UserService userService;

    @Test
    public void contextLoads() {
        boolean result = userService.todayIsSet((long)1);
        System.out.println(111);

    }

}
