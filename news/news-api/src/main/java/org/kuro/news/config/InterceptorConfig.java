package org.kuro.news.config;

import org.kuro.news.interceptor.LoginInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 拦截器配置
 */
@Configuration
public class InterceptorConfig implements WebMvcConfigurer {

    @Bean
    LoginInterceptor loginInterceptor() {
        return new LoginInterceptor();
    }

    @Bean
    CorsInterceptor corsInterceptor() {
        return new CorsInterceptor();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 拦截全部路径，这个跨域的需要放在最上面
        registry.addInterceptor(corsInterceptor()).addPathPatterns("/**");

        // 拦截全部
        registry.addInterceptor(loginInterceptor()).addPathPatterns("/api/v1/pri/*/**")
                // 以下路径不拦截
                .excludePathPatterns("/user/login", "/doc.html/**", "/doc.html");

        WebMvcConfigurer.super.addInterceptors(registry);
    }
}
