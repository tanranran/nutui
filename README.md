
<p align="center">
    <img alt="logo" src="https://img11.360buyimg.com/imagetools/jfs/t1/211965/25/7152/22022/61b16785E433119bb/aa41d7a9f7e823f3.png" width="150" style="margin-bottom: 10px;">
</p>

<p align="center">京东风格的移动端 Vue2、Vue3 组件库，支持一套代码生成 H5 和小程序</p>

<p align="center">
    <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://coveralls.io/repos/github/jdf2e/nutui/badge.svg?branch=master" alt="Coverage Status" />
    </a>
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/npm/l/@nutui/nutui.svg" alt="license"/>
    </a>
    <a href="https://www.npmjs.com/package/@nutui/nutui">
    <img src="https://img.shields.io/npm/v/@nutui/nutui.svg?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@nutui/nutui">
    <img src="https://img.shields.io/npm/dt/@nutui/nutui.svg?style=flat-square">
    </a>
    <a href="https://travis-ci.org/jdf2e/nutui">
    <img src="https://img.shields.io/travis/jdf2e/nutui.svg?style=flat-square">
    </a>  

</p>
<p align="center">
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/contributors/jdf2e/nutui" alt="GitHub contributors">
    </a>  
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/commit-activity/w/jdf2e/nutui" alt="GitHub commit activity">
    </a>
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/issues-closed/jdf2e/nutui" alt="GitHub closed issues">
    </a>  
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/commits-since/jdf2e/nutui/latest/next" alt="GitHub commits since latest release (by date)">
    </a>
    <a href="https://github.com/jdf2e/nutui">
    <img src="https://img.shields.io/github/release-date/jdf2e/nutui" alt="GitHub Release Date">
  </a>
</p>

<p align="center">
   <img src="https://img12.360buyimg.com/imagetools/jfs/t1/162421/39/13392/9425/6052ea60E592310a9/264bdff23ef5fe95.png" width="164" alt="NutUI" />
  &nbsp;
   <img src="https://img10.360buyimg.com/imagetools/jfs/t1/211804/23/22232/12144/634e4801Eac435cb6/cfd9e1773cf9423d.png" width="167" title="请用京东APP扫码">
  &nbsp;
  <img src="https://storage.360buyimg.com/jdc-article/gh_f2231eb941be_258.jpg" width="166" title="请用微信扫码">
  &nbsp;
   <img src="https://img12.360buyimg.com/imagetools/jfs/t1/205124/1/15643/30360/62aad730Ea5734bf9/703bb91a0b73282f.png" width="170" title="请用支付宝扫码">
</p>

---

> Nut[nʌt]，源自电影《冰河世纪》里松鼠 Scrat "执迷不悟"，一生追求，即便引发大灾难也绝不松手的坚果。

##  特性

* 🚀 70+ 高质量组件，覆盖移动端主流场景
* 💪 支持一套代码同时开发 H5+多端小程序
* 📖 基于京东APP 10.0 视觉规范
* 🍭 支持按需引用
* 📖 详尽的文档和示例
* 💪 支持 TypeScript
* 💪 支持服务端渲染（测试阶段）
* 🍭 支持组件级别定制主题，内置 700+ 个变量
* 🌍 国际化支持，已支持英文，印尼语和繁体中文
* 🍭 单元测试覆盖率超过 80%，保障稳定性
* 📖 提供 Sketch 设计资源

## 安装

```bash
// Vue2 项目 
npm i @nutui/nutui@2
```

```bash
// Vue3 H5 项目
npm i @nutui/nutui
```

```bash
// Vue3 小程序项目
npm i @nutui/nutui-taro
```

## 示例

```js
import { createApp } from "vue";
import App from "./App.vue";

// 注意：这种方式将会导入所有组件
import NutUI from "@nutui/nutui";
// 采用按需加载时  此全局css样式，需要删除
import "@nutui/nutui/dist/style.css";

createApp(App).use(NutUI).mount("#app");
```

## 学习资源

[NutUI 实战快速入门](https://www.bilibili.com/video/BV14r4y1e7LK/?spm_id_from=333.999.0.0&vd_source=339cf5dcca71ec2905c729fd92bba8a9)

[awesome-nutui](https://github.com/jdf2e/nutui/blob/next/awesome.md)


## 主题

我们提供了几套官方主题，来自京东内部实际业务，欢迎在项目中使用，如果不能满足需求，你也可以  <a href="https://nutui.jd.com/theme/#/base" target="_blank">自定义主题</a>

* <a href="https://nutui.jd.com/#/zh-CN/component/button" target="_blank">京东APP视觉（Vue3，默认）</a>
* <a href="https://nutui.jd.com/jdt/#/zh-CN/component/button" target="_blank">京东科技视觉（Vue3）</a>
* <a href="https://nutui.jd.com/?jdb#/zh-CN/component/button" target="_blank">京东零售B商城主题（Vue3）</a>
* <a href="https://nutui.jd.com/?jddkh#" target="_blank">京东企业业务主题（Vue3，即将发布）</a>
* <a href="https://nutui.jd.com/jdl/#/cell" target="_blank">京东物流视觉（Vue2）</a>


## 版本说明

> @nutui/nutui 和 @nutui/nutui-taro 属于并行版本，存在部分差异，版本号始终保持一致。如果兼容 ios 10 以下请使用 @nutui/nutui@2

* NutUI 2x & NutUI-JDL 使用 Vue2 开发，支持现代浏览器及 Android >= 4.0、iOS >= 8.0，仅 H5 应用。
* NutUI 3x 使用 Vue3 开发，支持现代浏览器及 Chrome >= 51、iOS >= 10.0，可输出 H5 和小程序两类应用。

## 构建版本

> AMD 环境、Webpack、Vite 等构建工具环境、服务端建议使用 es 版，非模块化环境（如通过 `<script>` 标签直接引用）建议使用 umd 压缩版。

* es **nutui.es.js**

* umd **nutui.umd.js**


## 使用案例

NutUI 已经投入了我们的生产环境中使用，业界也在广泛地使用 NutUI 开发多端应用。
<p>
<img src="http://storage.360buyimg.com/jdc-article/nutuiDemo/user-cases.jpg" alt="NutUI" />
</p>
<p><a href="https://nutui.jd.com/#/case">更多案例</a></p>
<p><a href="https://get.jd.com/#/survey/index?id=4217247740034539">我们正在征集社区优秀案例，欢迎点击提交</a></p>

## 链接

<ul>
    <li>
        <a href="https://github.com/jdf2e/nutui/discussions">
            Discussions  (用👍投票)
        </a>
    </li>
    <li>
        <a href="https://github.com/jdf2e/nutui/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22">
            Feature Requests (用👍投票)
        </a>
    </li>
     <li>
        <a href="https://github.com/jdf2e/nutui/labels/bug%203.0">
            Bugs (用👍投票)
        </a>
    </li>
     <li>
        <a href="https://github.com/jdf2e/nutui/issues?q=is%3Aissue+is%3Aopen+label%3Aquestion">
            Question  (用👍投票)
        </a>
    </li>
</ul>

## 开发交流

| 版本 | 微信群 |内部咚咚群 |
| --- | --- |--- |
| [NutUI Vue](https://github.com/jdf2e/nutui/issues) | <img src="https://storage.360buyimg.com/nutui-static/image/wx-code.png" width="100" /> 关注后回复「NutUI」 | 82957939
| [NutUI x Taro](https://github.com/jdf2e/nutui/issues) | <img src="https://camo.githubusercontent.com/db4276b4ee4b443158195e943e9e678cb4d2afb7580f70d4d817ef0a90413aec/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f7461726f2d6a642d636f6d2f7374617469632f636f6e746163745f7461726f5f6e757475695f71722e706e67" width="100" /> 关注后回复「NutUI」 | 1022545110 |


## 参与共建

请参考 [《贡献指南》](https://nutui.jd.com/#/zh-CN/guide/contributing)，参与共建提 [PR](https://github.com/jdf2e/nutui/pulls)

> 非常欢迎社区开发者为 NutUI 贡献代码，在贡献之前请先阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)，[《如何有效报告bug》](https://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html)，[《NutUI 邀您共建》](https://jelly.jd.com/article/6320528b92d94a0068685525) 能够更容易的理解和获得帮助。

感谢以下所有给 NutUI 贡献过代码的 [开发者](https://github.com/jdf2e/nutui/graphs/contributors)。

## 贡献者们

感谢以下小伙伴们为 NutUI 发展做出的贡献：

<a href="https://github.com/jdf2e/nutui/graphs/contributors">
  <img src="https://opencollective.com/nutui/contributors.svg?width=890&button=false" alt="contributors">
</a>

## 开发计划

[Milestones](https://github.com/jdf2e/nutui/projects)

## 更新日志

本项目遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，更新日志请查阅 [Release](https://github.com/jdf2e/nutui/releases)。

## github stargazers 

![stargazers](https://starchart.cc/jdf2e/nutui.svg)

