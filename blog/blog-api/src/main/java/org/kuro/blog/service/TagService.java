package org.kuro.blog.service;

import org.kuro.blog.model.entity.Tag;
import org.kuro.blog.model.response.Result;

import java.util.List;

/**
 * @Author: 白鸟亦悲否？
 * @Date: 2021/2/10 19:21
 */
public interface TagService {

    List<Tag> findAllTags();

    void addTag(Tag tag);

    void updateTag(Tag tag);

    Result deleteTag(Integer tagId);
}
