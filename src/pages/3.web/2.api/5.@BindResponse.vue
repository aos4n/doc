<template>
    <div class="page-narrow">
        <h1>@BindResponse</h1>
        <p>绑定Koa.Response</p>
        <pre class="typescript">
@Mapping()
index3(@BindResponse res: Response) {
    return res.body = 'ok'
}</pre>
    </div>
</template>