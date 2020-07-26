<template>
    <div class="page-narrow">
        <h1>@GlobalActionFilter</h1>
        <p>标记此类为全局请求过滤器，此类将会被aos4n自动扫描到并且应用到所有的控制器以及其Action</p>
        <pre class="typescript">
@GlobalActionFilter({ order: 2, match: /^\/home2/i })
export class MyGlobalActionFilter3 {
    @DoBefore
    before(actionFilterContext: ActionFilterContext) {
        actionFilterContext.ctx.state.str = '1'
    }
}</pre>
    </div>
</template>