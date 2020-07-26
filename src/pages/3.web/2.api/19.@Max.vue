<template>
    <div class="page-narrow">
        <h1>@Max</h1>
        <p>最大数值大小验证器，只能用于Number的验证</p>
        <p>不会对null值进行验证，如需同时验证null，请添加@NotNull</p>
        <pre class="typescript">
@Typed
@Max(2)
id: number</pre>
    </div>
</template>