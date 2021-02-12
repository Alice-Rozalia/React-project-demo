package org.kuro.blog.service;

import org.kuro.blog.model.entity.Article;

import java.util.List;

/**
 * @Author: 白鸟亦悲否？
 * @Date: 2021/2/10 19:20
 */
public interface ArticleService {

    List<Article> findArticles(Integer tagId);

    Article findArticleById(Integer id);

    void addArticle(Article article, Integer[] ids);
}
