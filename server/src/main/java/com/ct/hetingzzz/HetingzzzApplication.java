package com.ct.hetingzzz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class HetingzzzApplication {

    public static void main(String[] args) {
        SpringApplication.run(HetingzzzApplication.class, args);
    }
}
