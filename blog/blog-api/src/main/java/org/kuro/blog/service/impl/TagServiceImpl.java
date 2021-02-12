package org.kuro.blog.service.impl;

import org.kuro.blog.mapper.ArticleTagMapper;
import org.kuro.blog.mapper.TagMapper;
import org.kuro.blog.model.entity.ArticleTag;
import org.kuro.blog.model.entity.Tag;
import org.kuro.blog.model.response.Result;
import org.kuro.blog.model.response.ResultCode;
import org.kuro.blog.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author: 白鸟亦悲否？
 * @Date: 2021/2/10 19:21
 */
@Service
public class TagServiceImpl implements TagService {

    @Autowired
    private TagMapper tagMapper;

    @Autowired
    private RedisTemplate redisTemplate;

    @Autowired
    private ArticleTagMapper articleTagMapper;

    @Override
    public List<Tag> findAllTags() {
        List<Tag> tags = redisTemplate.opsForList().range("blogTags", 0, -1);
        if (tags == null || tags.size() == 0) {
            tags = tagMapper.selectAll();
            redisTemplate.opsForList().rightPushAll("blogTags", tags);
        }
        return tags;
    }

    @Override
    public void addTag(Tag tag) {
        tagMapper.insertSelective(tag);
        redisTemplate.delete("blogTags");
    }

    @Override
    public void updateTag(Tag tag) {
        tagMapper.updateByPrimaryKeySelective(tag);
        redisTemplate.delete("blogTags");
    }

    @Override
    public Result deleteTag(Integer tagId) {
        List<ArticleTag> list = articleTagMapper.findArticleTagByTagId(tagId);
        if (list != null || list.size() != 0) {
            return Result.error(ResultCode.TAG_IN_USE);
        }
        tagMapper.deleteByPrimaryKey(tagId);
        redisTemplate.delete("blogTags");
        return Result.ok(ResultCode.DELETE_SUCCESS);
    }
}
