package org.kuro.blog.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.kuro.blog.model.entity.Tag;
import org.kuro.blog.model.response.Result;
import org.kuro.blog.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author: 白鸟亦悲否？
 * @Date: 2021/2/11 9:50
 */
@RestController
@RequestMapping("/api/v1")
@Api(value = "系统管理模块", tags = "标签管理")
public class TagController {

    @Autowired
    private TagService tagService;

    @GetMapping("/pub/tag")
    @ApiOperation(value = "文章列表", notes = "查询所有文章")
    public Result findAllTags() {
        List<Tag> tags = tagService.findAllTags();
        return Result.ok().data("tags", tags);
    }
}
