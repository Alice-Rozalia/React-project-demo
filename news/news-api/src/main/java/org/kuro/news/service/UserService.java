package org.kuro.news.service;

import org.kuro.news.model.response.Result;

/**
 * @Author Kuro
 * @Date 2021/1/11 20:08
 * @Version 1.0
 */

public interface UserService {

    Result login(String username, String pwd);

}
