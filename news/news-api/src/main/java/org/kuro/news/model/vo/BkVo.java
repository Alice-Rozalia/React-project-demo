package org.kuro.news.model.vo;

import lombok.Data;
import lombok.ToString;
import org.kuro.news.model.entity.Bk;
import org.kuro.news.model.entity.Xinwen;

import java.util.List;

@Data
@ToString
public class BkVo extends Bk {

    private List<Xinwen> xinwens;
}
