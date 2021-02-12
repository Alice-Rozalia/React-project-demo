package org.kuro.blog.service.impl;

import org.kuro.blog.mapper.UserMapper;
import org.kuro.blog.model.entity.User;
import org.kuro.blog.model.response.Result;
import org.kuro.blog.model.response.ResultCode;
import org.kuro.blog.service.UserService;
import org.kuro.blog.utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

/**
 * @Author: 白鸟亦悲否？
 * @Date: 2021/2/10 20:04
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Override
    public Result login(User user) {
        Example example = new Example(User.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("username", user.getUsername());
        User result = userMapper.selectOneByExample(example);
        if (result == null) {
            return Result.error(ResultCode.LOGIN_FAIL);
        }
        boolean matches = encoder.matches(user.getPassword(), result.getPassword());
        if (!matches) {
            return Result.error(ResultCode.LOGIN_FAIL);
        }
        return Result.ok().message(ResultCode.LOGIN_SUCCESS.getMessage()).data("token", JWTUtils.geneJsonWebToken(user));
    }
}
