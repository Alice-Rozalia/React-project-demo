package org.kuro.news.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.kuro.news.model.page.PageResult;
import org.kuro.news.model.response.Result;
import org.kuro.news.model.vo.NewsVo;
import org.kuro.news.service.BkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author Kuro
 * @Date 2021/1/11 19:34
 * @Version 1.0
 */

@RestController
@RequestMapping("api/v1/")
@Api(value = "系统管理模块", tags = "板块管理")
public class BkController {

    @Autowired
    private BkService bkService;

    @GetMapping("pub/bk/list")
    @ApiOperation(value = "板块列表", notes = "查询所有的板块")
    public Result findBks(@RequestParam(value = "bid", required = false) Integer bid) {
        return bkService.findBks(bid);
    }
}
