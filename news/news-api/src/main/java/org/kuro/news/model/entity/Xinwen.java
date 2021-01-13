package org.kuro.news.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.ToString;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * @Author Kuro
 * @Date 2021/1/11 19:17
 * @Version 1.0
 */

@Data
@ToString
@Table(name = "xinwen")
@ApiModel(value="新闻对象", description="新闻表")
public class Xinwen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(value = "主键id")
    private Integer id;

    @ApiModelProperty(value = "新闻标题")
    private String title;

    @JsonProperty("create_time")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @ApiModelProperty(value = "发布时间")
    private Date publishDate;

    @ApiModelProperty(value = "来源")
    private String source;

    @ApiModelProperty(value = "作者")
    private String author;

    @ApiModelProperty(value = "编辑人")
    private String editor;

    @ApiModelProperty(value = "内容")
    private String content;

    @ApiModelProperty(value = "板块id")
    private Integer bkId;

    @ApiModelProperty(value = "是否置顶")
    private Integer isTop;

    @ApiModelProperty(value = "浏览次数")
    private Integer clickCount;
}
