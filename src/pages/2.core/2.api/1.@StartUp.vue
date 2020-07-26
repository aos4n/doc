<template>
    <div class="page-narrow">
        <h1>@StartUp</h1>
        <p>使用@StartUp装饰器标记一个类为预启动组件，并且传入一个可选的order参数</p>
        <pre class="typescript">
import { StartUp, Init } from "aos4n-core";

@StartUp()
export class StartUp1 {
    index: number;

    @Init
    private init() {
        this.index = 0;
    }

    doSth() {
        return this.index++
    }
}</pre>
    </div>
</template>