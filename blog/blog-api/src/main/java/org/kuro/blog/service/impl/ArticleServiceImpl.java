package org.kuro.blog.service.impl;

import org.kuro.blog.mapper.ArticleMapper;
import org.kuro.blog.mapper.ArticleTagMapper;
import org.kuro.blog.model.entity.Article;
import org.kuro.blog.model.entity.ArticleTag;
import org.kuro.blog.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @Author: 白鸟亦悲否？
 * @Date: 2021/2/10 19:20
 */
@Service
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    private ArticleMapper articleMapper;

    @Autowired
    private ArticleTagMapper articleTagMapper;

    @Override
    public List<Article> findArticles(Integer tagId) {
        if (tagId == null) {
            return articleMapper.findArticles();
        }
        List<ArticleTag> aids = articleTagMapper.findArticleTagByTagId(tagId);
        List<Article> articles = new ArrayList<>();
        for (ArticleTag aid : aids) {
            articles.add(articleMapper.findArticleByIdIndex(aid.getArticleId()));
        }
        return articles;
    }

    @Override
    public Article findArticleById(Integer id) {
        return articleMapper.findArticleById(id);
    }

    @Override
    public void addArticle(Article article, Integer[] ids) {
        article.setCreateTime(new Date());
        articleMapper.insertSelective(article);
        for (int i = 0; i < ids.length; i++) {
            ArticleTag tag = new ArticleTag();
            tag.setTagId(ids[i]);
            tag.setArticleId(article.getId());
            articleTagMapper.insertSelective(tag);
        }
    }
}
