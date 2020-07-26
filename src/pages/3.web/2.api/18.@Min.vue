<template>
    <div class="page-narrow">
        <h1>@Min</h1>
        <p>最小数值大小验证器，只能用于Number的验证</p>
        <p>不会对null值进行验证，如需同时验证null，请添加@NotNull</p>
        <pre class="typescript">
@Typed
@Min(2)
id: number</pre>
    </div>
</template>