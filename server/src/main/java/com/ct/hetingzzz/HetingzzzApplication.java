package com.ct.hetingzzz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class HetingzzzApplication {

    public static void main(String[] args) {
        SpringApplication.run(HetingzzzApplication.class, args);
    }
}
