<template>
    <div class="page-narrow">
        <h1>@MaxDecimal</h1>
        <p>最大小数位验证器，只能用于Number的验证</p>
        <p>不会对null值进行验证，如需同时验证null，请添加@NotNull</p>
        <pre class="typescript">
@Typed
@MaxDecimal(2)
price: number</pre>
    </div>
</template>