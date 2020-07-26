<template>
    <div class="page-narrow">
        <h1>@BindBody</h1>
        <p>绑定请求体参数</p>
        <pre class="typescript">
@PostMapping()
index9(@BindBody im: Index9IM) {
    return im
}</pre>
    </div>
</template>