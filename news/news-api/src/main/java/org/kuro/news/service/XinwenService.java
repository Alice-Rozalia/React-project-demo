package org.kuro.news.service;

import org.kuro.news.model.entity.Xinwen;
import org.kuro.news.model.page.PageResult;
import org.kuro.news.model.response.Result;
import org.kuro.news.model.vo.NewsVo;

/**
 * @Author Kuro
 * @Date 2021/1/11 19:37
 * @Version 1.0
 */

public interface XinwenService {

    PageResult<NewsVo> findNews(Integer page, Integer rows, String key);

    Result addNews(Xinwen xinwen);

    Result deleteNews(Integer id);

    Result updateNews(Xinwen xinwen);

    Result findNewsById(Integer id);

    Result findNewsByBkid(Integer bid);
}
