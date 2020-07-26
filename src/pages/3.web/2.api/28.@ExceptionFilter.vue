<template>
    <div class="page-narrow">
        <h1>@ExceptionFilter</h1>
        <p>标记此类为局部请求过滤器，除非被显式使用（@UseExceptionFilter），否则不会生效，可以作用于Controller以及Action</p>
        <pre class="typescript">
@ExceptionFilter
export class MyExceptionFilter6 {
    @ExceptionHandler(MyException)
    async handleMyException(ctx: any, ex: MyException) {
        ctx.body = 'MyExceptionFilter6_MyException'
    }

    @ExceptionHandler(Error)
    async handleError(ctx: any, error: Error) {
        ctx.body = 'MyExceptionFilter6_Error'
    }
}</pre>
        <pre class="typescript">
@Controller()
@UseExceptionFilter(MyExceptionFilter6)
export class Home2Controller {
    @Mapping()
    index() {
        throw new MyException('err')
    }

    @Mapping()
    index1() {
        throw new MyException1('err')
    }
}</pre>
    </div>
</template>