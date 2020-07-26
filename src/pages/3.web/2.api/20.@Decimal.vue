<template>
    <div class="page-narrow">
        <h1>@Decimal</h1>
        <p>小数位验证器，只能用于Number的验证</p>
        <p>不会对null值进行验证，如需同时验证null，请添加@NotNull</p>
        <pre class="typescript">
@Typed
@Decimal(2, 3)
price: number</pre>
    </div>
</template>