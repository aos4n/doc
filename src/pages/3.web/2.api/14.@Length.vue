<template>
    <div class="page-narrow">
        <h1>@Length</h1>
        <p>长度验证器，只能用于String、Array的验证，注意：aos4n在转换类型时会自动trim字符串</p>
        <p>不会对null值进行验证，如需同时验证null，请添加@NotNull</p>
        <pre class="typescript">
@Typed
@Length(2, 3)
name: string

TypedArray(String)
@Length(2, 3)
imgs: string[]</pre>
    </div>
</template>