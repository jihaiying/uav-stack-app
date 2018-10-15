## 项目命名

因原版名为 com.creditease.uav.console，所以新版命名为 com.creditease.uav.console.v2，即第二版。

## 本地安装

1. 安装 node v8.11.3
2. 更新 http://gitlab.creditease.corp/fundamental-research-pioneer-team/ce-datamonitorsystem/tree/master
3. WebStorm 打开其中的 com.creditease.uav.console.v2 目录
4. yarn install
5. yarn start

## 技术点

- React：组件化
- Redux：数据管理
- ES6：模块化及其他语法
- Webpack：模块打包
- ESLint：代码检查
- Prettier：代码格式化
- React Router：路由
- React Intl：国际化
- Git：版本管理
- Yarn：包管理
- Immutable：不可变数据

## 目录结构

```
uav-stack/
  yarn-error.lock
  yarn.lock
  README.md
  package.json // 模块依赖说明和配置信息
  .gitignore
  node_modules/ // 依赖包
  public/
    index.html
    favicon.ico
    mainfest.json
  src/
    actions/ // 存放 actionCreater
    components/ // 存放 组件
        App/
            index.js
        Home/ // 主页
            index.js
            partial/ // 组成部分
                Banner/
                    assets/ // 静态文件
                        Banner.css
                        bannerBac.jpg
                    index.js
                ...
        ...
        shared/ // 共享组件
            Header/
            ...
    config/
    i18n/ // 存放国际化文档
        en_US.js
        zh_CN.js
    lib/ // 工具函数
        storage.js
        ...
    reducers/ // 存放 Reducer
        index.js //
    index.css // 全局 css
    index.js // 入口文件
    registerServiceWorker.js
```
