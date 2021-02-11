package org.kuro.blog.service.impl;

import org.kuro.blog.mapper.TagMapper;
import org.kuro.blog.model.entity.Tag;
import org.kuro.blog.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Override
    public List<Tag> findAllTags() {
        return tagMapper.selectAll();
    }
}
