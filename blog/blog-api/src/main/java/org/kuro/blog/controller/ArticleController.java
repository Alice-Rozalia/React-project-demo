package org.kuro.blog.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang3.StringUtils;
import org.kuro.blog.model.entity.Article;
import org.kuro.blog.model.response.Result;
import org.kuro.blog.model.response.ResultCode;
import org.kuro.blog.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @Author: 白鸟亦悲否？
 * @Date: 2021/2/10 20:19
 */
@RestController
@RequestMapping("/api/v1")
@Api(value = "系统管理模块", tags = "文章管理")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping("/pub/article")
    @ApiOperation(value = "文章列表", notes = "查询所有文章")
    public Result findArticles(@RequestParam(value = "tagId", required = false) Integer tagId) {
        List<Article> articles = articleService.findArticles(tagId);
        return Result.ok().data("articles", articles);
    }

    @GetMapping("/pub/article_byId/{articleId}")
    @ApiOperation(value = "文章详情", notes = "根据文章id获取文章")
    public Result findArticleById(@PathVariable("articleId") Integer articleId) {
        if (articleId == null) {
            return Result.error(ResultCode.ARTICLE_NOT_EXIST);
        }
        Article article = articleService.findArticleById(articleId);
        return Result.ok().data("article", article);
    }
}
