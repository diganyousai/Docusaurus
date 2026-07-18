---
title: 项目 D · 开源组件库
sidebar_position: 5
---
# 项目 D ·  Docusaurus 说明文档

## 项目背景

建立新产品的说明文档

## 项目描述

* 基于 React 生态与 SSG 技术，用 Docusaurus 搭建高性能文档站。引入管理后台 Decap CMS，并配合 CI/CD 实现自动化部署。

## 项目问题解释

* react特点：

  \


  组件化：UI 拆成可复用的独立单元（

  `<Hero />`

  、

  `<Skills />`

   这种）声明式：你描述"在什么状态下 UI 长什么样"，React 负责把 DOM 渲染出来虚拟 DOM：React 在内存里维护一个"虚拟"的 DOM 树，计算出真正的 DOM 需要改动的部分再更新（比手动 jQuery 高效得多）单向数据流：父组件通过 

  `props`

   把数据传给子组件，子组件通过 

  `useState`

  /

  `useEffect`

   管理自己的状态


* SSG（Static Site Generation，静态站点生成）
* 提前在 build 时把页面全部渲染成 HTML 文件，运行时只发这些静态文件，浏览器拿到就能直接显示（不用等服务器计算）
*
