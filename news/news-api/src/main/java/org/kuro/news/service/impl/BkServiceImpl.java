package org.kuro.news.service.impl;

import org.kuro.news.mapper.BkMapper;
import org.kuro.news.model.entity.Bk;
import org.kuro.news.model.entity.Xinwen;
import org.kuro.news.model.response.Result;
import org.kuro.news.service.BkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import java.util.List;

/**
 * @Author Kuro
 * @Date 2021/1/11 20:41
 * @Version 1.0
 */

@Service
public class BkServiceImpl implements BkService {

    @Autowired
    private BkMapper bkMapper;

    @Override
    public Result findBks(Integer bid) {
        Example example = new Example(Xinwen.class);
        Example.Criteria criteria = example.createCriteria();

        if (bid != null) {
            criteria.andEqualTo("id", bid);
        }

        List<Bk> bks = this.bkMapper.selectByExample(example);
        return Result.ok().data("bks", bks);
    }
}
