package org.kuro.blog.mapper;

import org.apache.ibatis.annotations.Param;
import org.kuro.blog.model.entity.ArticleTag;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

/**
 * @Author: 白鸟亦悲否？
 * @Date: 2021/2/11 11:53
 */
public interface ArticleTagMapper extends Mapper<ArticleTag> {

    List<ArticleTag> findArticleTagByTagId(@Param("tagId") Integer tagId);
}
