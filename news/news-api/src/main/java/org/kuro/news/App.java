package org.kuro.news;

import org.kuro.news.utils.CommonUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tk.mybatis.spring.annotation.MapperScan;

/**
 * @Author Kuro
 * @Date 2021/1/11 19:10
 * @Version 1.0
 */

@SpringBootApplication
@MapperScan("org.kuro.news.mapper")
public class App {

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

}
