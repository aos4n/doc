<template>
    <div class="page-narrow">
        <h1>介绍</h1>
        <p>aos4n-web是aos4n生态的web框架，基于koa2，封装了大量通用性功能，包括：参数绑定、参数验证、过滤器、声明式（装饰器）路由，再借助aos4n强大的组件化功能，使开发者更专注于业务逻辑的实现，从而节省时间、并且减少低级错误的产生。</p>
        <h1>安装</h1>
        <pre class="bash">npm i aos4n/web</pre>
        <h1>使用</h1>
        <pre class="typescript">
import path = require('path');
import { getContainer } from 'aos4n-core';
import { Application } from 'aos4n-web';

process.env.aos4nEntry = __filename
process.env.aos4nWebPort = 3000

getContainer().loadClass(Application).runAsync()</pre>
    </div>
</template>