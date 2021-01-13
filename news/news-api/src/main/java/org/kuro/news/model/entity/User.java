package org.kuro.news.model.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
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
 * @Date 2021/1/11 19:16
 * @Version 1.0
 */
@Data
@ToString
@Table(name = "user")
@ApiModel(value="用户对象", description="用户表")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(value = "主键id")
    private Integer id;

    @ApiModelProperty(value = "用户名")
    private String username;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ApiModelProperty(value = "密码")
    private String pwd;

    @ApiModelProperty(value = "状态")
    private Boolean status;
}
