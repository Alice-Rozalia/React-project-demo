const {override, fixBabelImports, addLessLoader, addWebpackAlias} = require("customize-cra");
const path = require("path");

module.exports = override(
    // 针对 antd 实现按需打包：根据import来打包 (使用babel-plugin-import)
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
    }),
    // 使用 less-loader对源码重的less的变量进行重新制定，设置antd自定义主题
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {"@primary-color": "#31c27c"},
    }),
    // 增加路径别名的处理
    addWebpackAlias({
        '@': path.resolve('./src')
    })
);
