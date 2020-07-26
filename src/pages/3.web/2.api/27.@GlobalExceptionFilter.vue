<template>
    <div class="page-narrow">
        <h1>@GlobalExceptionFilter</h1>
        <p>标记此类为全局异常过滤器，此类将会被aos4n自动扫描到并且应用到所有的控制器以及其Action</p>
        <pre class="typescript">
@GlobalExceptionFilter({ match: /^\/home1/i })
export class MyGlobalExceptionFilter5 {
    @ExceptionHandler(Error)
    async handleError(ctx: any, error: Error) {
        ctx.body = 'MyGlobalExceptionFilter5'
    }
}</pre>
    </div>
</template>