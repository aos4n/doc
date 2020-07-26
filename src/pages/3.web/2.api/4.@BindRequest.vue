<template>
    <div class="page-narrow">
        <h1>@BindRequest</h1>
        <p>绑定Koa.Request</p>
        <pre class="typescript">
@Mapping()
index2(@BindRequest req: Request) {
    return req.query.name
}</pre>
    </div>
</template>