# hexo-theme-gxyz

使用本主题：

1. 下载主题
    ```
    git clone https://github.com/gxyz/hexo-theme-gxyz.git themes/gxyz
    ```

2. 修改网站的配置文件`_config.yml`
    ```
    theme: gxyz  # 设置主题

    highlight:   # 关闭hexo自带的高亮
        enable: false
        line_number: false
        auto_detect: false
    ```

3. 由于模板使用的 pug,因此需要安装插件支持:
    ```
    npm install hexo-render-pug --save
    ```

4. 要开启atom.xml,sitemap.xml,和归档不分页，需要安装三个插件:
    ```
    npm install hexo-generator-sitemap --save
    npm install hexo-generator-feed --save
    npm install hexo-generator-archive --save
    ```

未完待续.....


