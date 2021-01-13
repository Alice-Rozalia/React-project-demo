package org.kuro.news.model.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.ToString;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @Author Kuro
 * @Date 2021/1/11 19:14
 * @Version 1.0
 */

@Data
@ToString
@Table(name = "bk")
@ApiModel(value="板块对象", description="板块表")
public class Bk {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(value = "主键id")
    private Integer id;

    @ApiModelProperty(value = "板块名称")
    private String name;
}
