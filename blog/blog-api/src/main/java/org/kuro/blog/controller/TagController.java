package org.kuro.blog.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.kuro.blog.model.entity.Tag;
import org.kuro.blog.model.response.Result;
import org.kuro.blog.model.response.ResultCode;
import org.kuro.blog.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @ApiOperation(value = "标签列表", notes = "查询所有标签")
    public Result findAllTags() {
        List<Tag> tags = tagService.findAllTags();
        return Result.ok().data("tags", tags);
    }

    @PostMapping("/pri/tag")
    @ApiOperation(value = "添加标签", notes = "新增标签")
    public Result addTag(@RequestBody Tag tag) {
        tagService.addTag(tag);
        return Result.ok(ResultCode.ADD_SUCCESS);
    }

    @PutMapping("/pri/tag")
    @ApiOperation(value = "修改标签", notes = "修改标签")
    public Result updateTag(@RequestBody Tag tag) {
        tagService.updateTag(tag);
        return Result.ok(ResultCode.UPDATE_SUCCESS);
    }

    @DeleteMapping("/pri/tag/{tagId}")
    @ApiOperation(value = "删除标签", notes = "删除标签")
    public Result deleteTag(@PathVariable("tagId") Integer tagId) {
        return tagService.deleteTag(tagId);
    }
}
