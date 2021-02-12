package org.kuro.blog.model.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * @Author: 白鸟亦悲否？
 * @Date: 2021/2/10 19:12
 */
@Data
@ApiModel(value="Tag对象", description="标签表")
@Table(name = "tb_tag")
public class Tag implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(value = "主键id")
    private Integer id;

    @ApiModelProperty(value = "标签名")
    private String name;

    @ApiModelProperty(value = "颜色")
    private String color;
}
