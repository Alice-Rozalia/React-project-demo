package org.kuro.news.model.response;

/**
 * @Description: 返回码定义
 * 规定:
 * #200表示成功
 * #1001～1999 区间表示参数错误
 * #2001～2999 区间表示用户错误
 * #3001～3999 区间表示接口异常
 */
@SuppressWarnings("all")
public enum ResultCode implements CustomizeResultCode{
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

    /* 用户错误 */
    USER_NOT_LOGIN(2001, "用户未登录！"),
    USER_ACCOUNT_EXPIRED(2002, "账号已过期！"),
    USER_CREDENTIALS_ERROR(2003, "账号或密码错误！"),
    USER_CREDENTIALS_EXPIRED(2004, "密码过期！"),
    USER_ACCOUNT_DISABLE(2005, "账号不可用！"),
    USER_ACCOUNT_LOCKED(2006, "账号被锁定！"),
    USER_ACCOUNT_NOT_EXIST(2007, "账号不存在！"),
    USER_ACCOUNT_ALREADY_EXIST(2008, "账号已存在！"),
    USER_ACCOUNT_USE_BY_OTHERS(2009, "账号下线！"),

    // 注册相关
    MAIL_SEND(2300, "验证码已发送至注册邮箱，请注意查收！"),
    CODE_ERROR(2301, "验证码错误！"),
    EMAIL_ACCOUNT_ALREADY_EXIST(2302, "该邮箱已被注册！"),
    NICKNAME_ACCOUNT_ALREADY_EXIST(2303, "该昵称已被占用！"),
    REGISTER_SUCCESS(2306, "注册成功！"),

    // 留言评论相关
    MESSAGE_SUCCESS(2401, "留言成功！"),
    MESSAGE_ERROR(2402, "留言失败！"),

    /*文章相关错误*/
    ARTICLE_ALREADY_EXIST(3008, "该文章已存在！"),

    /* 业务错误 */
    NO_PERMISSION(3001, "没有权限！"),

    ADD_SUCCESS(3801, "添加成功！"),
    ADD_ERROR(3802, "添加失败！"),

    UPDATE_SUCCESS(3803, "修改成功！"),
    UPDATE_ERROR(3804, "修改失败！"),

    DELETE_SECCESS(3805, "删除成功！"),
    DELETE_ERROR(3806, "删除失败！"),

    /*运行时异常*/
    ARITHMETIC_EXCEPTION(9001,"算数异常！");

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