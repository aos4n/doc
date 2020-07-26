<template>
    <div class="page-narrow">
        <h1>@MinDecimal</h1>
        <p>最小小数位验证器，只能用于Number的验证</p>
        <p>不会对null值进行验证，如需同时验证null，请添加@NotNull</p>
        <pre class="typescript">
@Typed
@MinDecimal(2)
price: number</pre>
    </div>
</template>