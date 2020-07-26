<template>
    <div class="page-narrow">
        <h1>@BindPath</h1>
        <p>绑定url中的path参数</p>
        <pre class="typescript">
@GetMapping('/i6/:name')
index6(@BindPath('name') name: string) {
    return name
}</pre>
    </div>
</template>