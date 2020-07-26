<template>
    <div class="page-narrow">
        <h1>@Controller</h1>
        <p>使用@Controller装饰器标记一个类为控制器，并且传入一个可选的path参数，用于指定路由前缀。按照约定，控制器文件名应该以Controller结尾，但这不是必须的。</p>
        <p>path参数也是可选的，如果不传，aos4n会指定这个类名的前面一部分并且转为小写作为路由前缀。比如：HomeController的默认路由前缀是/home。</p>
        <pre class="typescript">
import { Controller, GetMapping, BindQuery } from "aos4n-web";

@Controller()
export class HomeController {
    @GetMapping()
    async index() {
        return 'ok'
    }
}</pre>
    </div>
</template>