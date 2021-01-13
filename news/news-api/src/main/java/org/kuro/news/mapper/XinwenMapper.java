package org.kuro.news.mapper;

import org.apache.ibatis.annotations.Param;
import org.kuro.news.model.entity.Xinwen;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

/**
 * @Author Kuro
 * @Date 2021/1/11 19:30
 * @Version 1.0
 */

public interface XinwenMapper extends Mapper<Xinwen> {

    List<Xinwen> findNewsByBkid(@Param("bid") Integer bid);

}
