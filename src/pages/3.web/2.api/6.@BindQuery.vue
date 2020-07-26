<template>
    <div class="page-narrow">
        <h1>@BindQuery</h1>
        <p>绑定url中的query参数</p>
        <pre class="typescript">
@Mapping()
index4(@BindQuery('name') name: string) {
    return name
}</pre>
    </div>
</template>