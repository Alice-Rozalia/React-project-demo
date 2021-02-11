package org.kuro.blog.mapper;

import org.apache.ibatis.annotations.Param;
import org.kuro.blog.model.entity.Article;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

/**
 * @Author: 白鸟亦悲否？
 * @Date: 2021/2/10 19:19
 */
public interface ArticleMapper extends Mapper<Article> {

    List<Article> findArticles();

    Article findArticleById(@Param("id") Integer id);

    Article findArticleByIdIndex(@Param("id") Integer id);
}
