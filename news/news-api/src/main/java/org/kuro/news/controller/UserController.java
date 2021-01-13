package org.kuro.news.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang3.StringUtils;
import org.kuro.news.model.entity.User;
import org.kuro.news.model.response.Result;
import org.kuro.news.model.response.ResultCode;
import org.kuro.news.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * @Author Kuro
 * @Date 2021/1/11 20:06
 * @Version 1.0
 */
@RestController
@RequestMapping("user")
@Api(value = "系统管理模块", tags = "用户管理")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("login")
    @ApiOperation(value = "登录授权", notes = "登录授权接口，登录成功返回token令牌")
    public Result login(@RequestBody User user) {
        if (StringUtils.isBlank(user.getUsername()) || StringUtils.isBlank(user.getPwd())) {
            return Result.error().code(ResultCode.PARAM_NOT_COMPLETE.getCode()).message(ResultCode.PARAM_NOT_COMPLETE.getMessage());
        }
        return this.userService.login(user.getUsername(), user.getPwd());
    }
}
