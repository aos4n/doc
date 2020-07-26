<template>
    <div class="page-narrow">
        <h1>自定义验证器</h1>
        <p>上面介绍了aos4n-web自带的几种验证器，应该可以满足大部分项目的需求了，如果有更加特殊的验证需求，你也可以自定义验证器</p>
        <pre class="typescript">
import { Func } from "aos4n-web";

export function MyValidator(errorMesage: string = null) {
    errorMesage = errorMesage || '自定义验证不通过'
    return Func(a => {
        if (a == null) {
            return [true]
        }
        if (a.includes('1')) {
            return [true]
        }
        return [false, errorMesage]
    })
}</pre>
    </div>
</template>