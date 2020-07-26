<template>
    <div class="page-narrow">
        <h1>@ActionFilter</h1>
        <p>标记此类为局部请求过滤器，除非被显式使用（@UseActionFilter），否则不会生效，可以作用于Controller以及Action</p>
        <pre class="typescript">
@ActionFilter
export class MyActionFilter5 {
    n: number = 1
    @DoBefore
    before(actionFilterContext: ActionFilterContext) {
        actionFilterContext.ctx.body = '在DoBefore发送响应'
    }

    @DoAfter
    after(actionFilterContext: ActionFilterContext) {
        this.n = 2
    }
}</pre>
        <pre class="typescript">
@Controller()
export class Home1Controller {
    n: number = 1
    @UseActionFilter(MyActionFilter5)
    @GetMapping()
    index() {
        this.n = 2
        return 'ok'
    }
}</pre>
    </div>
</template>