<template>
    <div class="page-narrow">
        <h1>@Component</h1>
        <p>使用@Component标记一个类为组件</p>
        <pre class="typescript">
import { Component, Init } from "aos4n-core";

@Component
export class HomeService {
    @Init
    doInit() { }

    getSth() {
        return 1
    }
}</pre>
    </div>
</template>