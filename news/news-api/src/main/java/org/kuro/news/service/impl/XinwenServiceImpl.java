package org.kuro.news.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.commons.lang3.StringUtils;
import org.kuro.news.mapper.BkMapper;
import org.kuro.news.mapper.XinwenMapper;
import org.kuro.news.model.entity.Bk;
import org.kuro.news.model.entity.Xinwen;
import org.kuro.news.model.page.PageResult;
import org.kuro.news.model.response.Result;
import org.kuro.news.model.vo.BkVo;
import org.kuro.news.model.vo.NewsVo;
import org.kuro.news.service.XinwenService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @Author Kuro
 * @Date 2021/1/11 19:38
 * @Version 1.0
 */
@Service
public class XinwenServiceImpl implements XinwenService {

    @Autowired
    private XinwenMapper xinwenMapper;

    @Autowired
    private BkMapper bkMapper;

    @Override
    public PageResult<NewsVo> findNews(Integer page, Integer rows, String key) {
        Example example = new Example(Xinwen.class);
        Example.Criteria criteria = example.createCriteria();

        if (StringUtils.isNoneBlank(key)) {
            criteria.andLike("title", "%" + key + "%");
        }

        if (page != null && rows != null) {
            PageHelper.startPage(page, rows);
        }

        List<Xinwen> list = this.xinwenMapper.selectByExample(example);
        PageInfo<Xinwen> pageInfo = new PageInfo<>(list);

        ArrayList<NewsVo> newsVos = new ArrayList<>();
        list.forEach(item -> {
            NewsVo newsVo = new NewsVo();
            BeanUtils.copyProperties(item, newsVo);
            newsVo.setBk(this.bkMapper.selectByPrimaryKey(item.getBkId()));
            newsVos.add(newsVo);
        });

        return new PageResult<>(pageInfo.getTotal(), newsVos);
    }

    @Override
    public Result addNews(Xinwen xinwen) {
        xinwen.setPublishDate(new Date());
        if (this.xinwenMapper.insertSelective(xinwen) == 1) {
            return Result.ok();
        }
        return Result.error();
    }

    @Override
    public Result deleteNews(Integer id) {
        if (xinwenMapper.deleteByPrimaryKey(id) == 1) {
            return Result.ok();
        }
        return Result.error();
    }

    @Override
    public Result updateNews(Xinwen xinwen) {
        if (this.xinwenMapper.updateByPrimaryKeySelective(xinwen) == 1) {
            return Result.ok();
        }
        return Result.error();
    }

    @Override
    public Result findNewsById(Integer id) {
        Xinwen xinwen = this.xinwenMapper.selectByPrimaryKey(id);
        if (xinwen == null) {
            return Result.error().message("该篇新闻不存在！");
        }
        return Result.ok().data("news", xinwen);
    }

    @Override
    public Result findNewsByBkid(Integer bid) {
        ArrayList<BkVo> bkVos = new ArrayList<>();

        if (bid == null) {
            List<Bk> bks = this.bkMapper.selectAll();
            bks.forEach(bk -> {
                BkVo bkVo = new BkVo();
                BeanUtils.copyProperties(bk, bkVo);
                List<Xinwen> xinwens = this.xinwenMapper.findNewsByBkid(bk.getId());
                bkVo.setXinwens(xinwens);
                bkVos.add(bkVo);
            });
        } else {
            Bk bk = this.bkMapper.selectByPrimaryKey(bid);
            BkVo bkVo = new BkVo();
            BeanUtils.copyProperties(bk, bkVo);
            List<Xinwen> xinwens = this.xinwenMapper.findNewsByBkid(bk.getId());
            bkVo.setXinwens(xinwens);
            bkVos.add(bkVo);
        }

        return Result.ok().data("index", bkVos);
    }
}
