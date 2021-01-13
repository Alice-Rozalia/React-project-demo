package org.kuro.news.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.kuro.news.model.entity.Xinwen;
import org.kuro.news.model.page.PageResult;
import org.kuro.news.model.response.Result;
import org.kuro.news.model.vo.NewsVo;
import org.kuro.news.service.XinwenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @Author Kuro
 * @Date 2021/1/11 19:35
 * @Version 1.0
 */

@RestController
@RequestMapping("api/v1/")
@Api(value = "系统管理模块", tags = "新闻管理")
public class XinwenController {

    @Autowired
    private XinwenService xinwenService;

    @GetMapping("pub/news/list")
    @ApiOperation(value = "新闻列表", notes = "分页查询所有的新闻，不传参数则查询所有")
    public Result findNews(
            @RequestParam(value = "key", required = false) String key,
            @RequestParam(value = "page", required = false) Integer page,
            @RequestParam(value = "rows", required = false) Integer rows
    ) {
        PageResult<NewsVo> news = xinwenService.findNews(page, rows, key);
        return Result.ok().data("news", news);
    }

    @PostMapping("pri/news/add")
    @ApiOperation(value = "添加新闻", notes = "添加新闻")
    public Result addNews(@RequestBody Xinwen xinwen) {
        return xinwenService.addNews(xinwen);
    }

    @DeleteMapping("pri/news/delete/{id}")
    @ApiOperation(value = "删除新闻", notes = "根据id删除新闻")
    public Result deleteNews(@PathVariable Integer id) {
        return xinwenService.deleteNews(id);
    }

    @PutMapping("pri/news/edit")
    @ApiOperation(value = "修改新闻", notes = "修改新闻")
    public Result updateNews(@RequestBody Xinwen xinwen) {
        return xinwenService.updateNews(xinwen);
    }

    @GetMapping("pub/news/detail/{id}")
    @ApiOperation(value = "查找新闻", notes = "根据id查询新闻")
    public Result findNewsById(@PathVariable Integer id) {
        return xinwenService.findNewsById(id);
    }

    @GetMapping("pub/news/bk")
    @ApiOperation(value = "首页新闻", notes = "根据版块id查询新闻")
    public Result findNewsByBkid(@RequestParam(value = "bid", required = false) Integer bid) {
        return xinwenService.findNewsByBkid(bid);
    }
}
