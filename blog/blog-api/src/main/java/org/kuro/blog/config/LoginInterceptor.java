package org.kuro.blog.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import org.apache.commons.lang3.StringUtils;
import org.kuro.blog.model.response.Result;
import org.kuro.blog.model.response.ResultCode;
import org.kuro.blog.utils.JWTUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

public class LoginInterceptor implements HandlerInterceptor {

    /**
     * 进入到 controller 之前的方法
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        try {
            String accesToken = request.getHeader("Authorization");
            if (accesToken == null) {
                accesToken = request.getParameter("Authorization");
            }

            if (StringUtils.isNoneBlank(accesToken)) {
                Claims claims = JWTUtils.checkJWT(accesToken);
                if (claims == null) {
                    // 告诉登录过期，重新登录
                    sendJsonMessage(response, Result.error(ResultCode.LOGIN_EXPIRE));
                    return false;
                }

                Integer id = (Integer) claims.get("id");
                String name = (String) claims.get("username");

                request.setAttribute("user_id", id);
                request.setAttribute("username", name);
                return true;
            }
        } catch (Exception e) {}

        return false;
    }

    /**
     * 响应json数据给前端
     * @param response
     * @param obj
     */
    public static void sendJsonMessage(HttpServletResponse response, Object obj) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            response.setContentType("application/json; charset=utf-8");
            PrintWriter writer = response.getWriter();
            writer.print(objectMapper.writeValueAsString(obj));
            writer.close();
            response.flushBuffer();
        } catch (Exception e) {}
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
