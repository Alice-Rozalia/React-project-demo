package org.kuro.blog.service;

import org.kuro.blog.model.entity.User;
import org.kuro.blog.model.response.Result;

/**
 * @Author: 白鸟亦悲否？
 * @Date: 2021/2/10 20:04
 */
public interface UserService {
    Result login(User user);
}
