<template>
    <div class="page-narrow">
        <h1>@NotEmpty</h1>
        <p>验证器，目标参数a必须符合此规则：a != null && a.length > 0，注意：aos4n在转换类型时会自动trim字符串</p>
        <pre class="typescript">
@Typed
@NotEmpty()
name: string</pre>
    </div>
</template>