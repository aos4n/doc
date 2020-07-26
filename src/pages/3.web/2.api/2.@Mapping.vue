<template>
    <div class="page-narrow">
        <h1>@Mapping</h1>
        <p>用于将Controller内的方法映射为Action，需要传入method以及path参数。这两个参数不是必须的，默认会映射为get方法，并且使用方法名作为路由。</p>
        <p>为了方便书写，我们提前准备好了几种常用的method对应的Mapping。分别是@GetMapping、@PostMapping、@PutMapping、@PatchMapping、@DeleteMapping、@HeadMapping。</p>
        <p>如果你要映射所有的method，可以使用AllMapping。</p>
        <p>一个方法可以使用多个Mapping标记，从而达到一个方法映射多个路由的目的。</p>
        <pre class="typescript">
import { Controller, GetMapping, BindQuery, Mapping } from "aos4n-web";

@Controller()
export class HomeController {
    @Mapping('post')
    @GetMapping()
    async index() {
        return 'ok'
    }
}</pre>
    </div>
</template>