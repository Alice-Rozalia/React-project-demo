package org.kuro.blog.utils;

import io.jsonwebtoken.*;
import org.kuro.blog.model.entity.User;

import java.util.Date;

/**
 * JWT工具类
 */
public class JWTUtils {

    // 过期时间，一天
    private static final long EXPIRE = 60000 * 60 * 24;
    // 加密密钥
    private static final String SECRET = "kuro.blog.alice.Rozalia.token";
    // 令牌前缀
    private static final String TOKEN_PREFIX = "kuro_blog";
    // subject
    private static final String SUBJECT = "kuro_blog";

    /**
     * 根据用户信息生成令牌
     *
     * @param user
     * @return
     */
    public static String geneJsonWebToken(User user) {
        String token = Jwts.builder().setSubject(SUBJECT)
                .claim("id", user.getId())
                .claim("username", user.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRE))
                .signWith(SignatureAlgorithm.HS256, SECRET).compact();

        token = TOKEN_PREFIX + token;
        return token;
    }

    /**
     * 校验token的方法
     *
     * @param token
     * @return
     */
    public static Claims checkJWT(String token) {
        try {
            final Claims claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token.replace(TOKEN_PREFIX, "")).getBody();
            return claims;
        } catch (Exception e) {
            return null;
        }
    }

}
