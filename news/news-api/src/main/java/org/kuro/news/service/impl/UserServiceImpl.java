package org.kuro.news.service.impl;

import org.kuro.news.mapper.UserMapper;
import org.kuro.news.model.entity.User;
import org.kuro.news.model.response.Result;
import org.kuro.news.service.UserService;
import org.kuro.news.utils.CommonUtils;
import org.kuro.news.utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * @Author Kuro
 * @Date 2021/1/11 20:08
 * @Version 1.0
 */

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public Result login(String username, String pwd) {
        User loginUser = new User();
        loginUser.setUsername(username);
        loginUser.setPwd(CommonUtils.MD5(pwd));

        User user = this.userMapper.selectOne(loginUser);
        if (user == null) {
            return Result.error().message("用户名或密码错误！");
        }
        if (!user.getStatus()) {
            return Result.error().message("该用户已被锁定，请联系管理员！");
        }
        String token = JWTUtils.geneJsonWebToken(user);
        Map<String, Object> map = new HashMap<>();
        map.put("token", token);
        map.put("user", user);
        return Result.ok().data(map);
    }
}
