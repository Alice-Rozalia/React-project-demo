package org.kuro.blog.model.response;

/**
 * @Author: 白鸟亦悲否？
 * @Date: 2020/12/23 15:35
 */
public enum ResultCode implements CustomizeResultCode {
    /* 成功 */
    SUCCESS(200, "请求成功！"),
    LOGIN_SUCCESS(201, "登录成功！"),

    /* 默认失败 */
    COMMON_FAIL(999, "请求失败！"),

    /* 参数错误：1000～1999 */
    PARAM_NOT_VALID(1001, "参数无效！"),
    PARAM_IS_BLANK(1002, "参数为空！"),
    PARAM_TYPE_ERROR(1003, "参数类型错误！"),
    PARAM_NOT_COMPLETE(1004, "参数缺失！"),

    ARTICLE_NOT_EXIST(2001, "该篇文章不存在！"),

    /* 业务错误 */
    NO_PERMISSION(3001, "权限不足！"),

    ADD_SUCCESS(3801, "添加成功！"),
    ADD_ERROR(3802, "添加失败！"),

    UPDATE_SUCCESS(3803, "修改成功！"),
    UPDATE_ERROR(3804, "修改失败！"),

    DELETE_SUCCESS(3805, "删除成功！"),
    DELETE_ERROR(3806, "删除失败！"),

    /*运行时异常*/
    ARITHMETIC_EXCEPTION(9001,"算数异常！"),
    HAS_ASSOCIATED_DATA(9100, "该数据有关联数据，操作失败！"),
    DATABASE_EXCEPTION(9120, "数据库异常！");

    private Integer code;

    private String message;

    ResultCode(Integer code,String message){
        this.code = code;
        this.message = message;
    }

    @Override
    public Integer getCode() {
        return code;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
