# roto -- 一个Vue UI 组件

[![Build Status](https://www.travis-ci.com/uile-alt/roto.svg?branch=main)](https://www.travis-ci.com/uile-alt/roto)
## 介绍

这是我在学习Vue过程中做的一个UI框架，希望对你有用。

## 开始使用

1.CSS样式

    使用本框架前，请在 CSS 中开启 border-box
    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```
    IE 8 及以上浏览器都支持此样式。
    
   
   

2.安装 roto
```
npm i --save roto-test
```
  
3.引入 roto
```
import { Button, ButtonGroup, Icon } from "roto-test";
import "roto-test/dist/index.css";
export default {
  name: "App",
  components: {
    "r-button": Button,
    'r-icon': Icon,
  },
};
```    

  
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献

