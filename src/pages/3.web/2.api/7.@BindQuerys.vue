<template>
    <div class="page-narrow">
        <h1>@BindQuerys</h1>
        <p>绑定url中全部的的path参数为一个对象</p>
        <pre class="typescript">
@Mapping()
index5(@BindQuerys im: Index5IM) {
    return im
}</pre>
    </div>
</template>