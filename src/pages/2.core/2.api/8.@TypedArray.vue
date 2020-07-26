<template>
    <div class="page-narrow">
        <h1>@TypedArray</h1>
        <p>如果需要转换的字段是一个数组，@Typed就无法胜任了，因为ts的Array是一个泛型，且程序运行时无法知道泛型确切类型，所以转换数组时还需要指定确切类型</p>
    </div>
</template>