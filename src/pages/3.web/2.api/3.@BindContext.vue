<template>
    <div class="page-narrow">
        <h1>@BindContext</h1>
        <p>绑定Koa.Context</p>
        <pre class="typescript">
@Controller()
export class HomeController{
  GetMapping()
  index(@BindContext ctx:Context){
    console.log(ctx.query.name)
    return 'ok'
  }
}</pre>
    </div>
</template>