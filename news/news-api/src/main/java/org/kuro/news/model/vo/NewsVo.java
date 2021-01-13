package org.kuro.news.model.vo;

import lombok.Data;
import lombok.ToString;
import org.kuro.news.model.entity.Bk;
import org.kuro.news.model.entity.Xinwen;

/**
 * @Author Kuro
 * @Date 2021/1/11 19:43
 * @Version 1.0
 */

@Data
@ToString
public class NewsVo extends Xinwen {

    private Bk bk;
}
