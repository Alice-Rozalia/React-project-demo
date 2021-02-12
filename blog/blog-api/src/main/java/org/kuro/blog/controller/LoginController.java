package org.kuro.blog.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.kuro.blog.model.entity.User;
import org.kuro.blog.model.response.Result;
import org.kuro.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: 白鸟亦悲否？
 * @Date: 2021/2/11 21:52
 */
@RestController
@RequestMapping("/api/v1")
@Api(value = "系统管理模块", tags = "用户登录")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/pub/login")
    @ApiOperation(value = "用户登录", notes = "通过用户名密码进行登录")
    public Result login(@RequestBody User user) {
        return userService.login(user);
    }
}
