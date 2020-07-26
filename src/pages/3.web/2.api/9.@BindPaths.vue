<template>
    <div class="page-narrow">
        <h1>@BindPaths</h1>
        <p>绑定url中全部的的path参数为一个对象</p>
        <pre class="typescript">
@GetMapping('/i7/:school/:grade')
index7(@BindPaths im: Index7IM) {
    return im
}</pre>
    </div>
</template>