<template>
    <div class="page-narrow">
        <h1>介绍</h1>
        <p>aos4n-core是aos4n系列的基础框架，集成了Component、Config、TypeConvert、ScheduleJob等基础功能</p>
        <h1>安装</h1>
        <pre class="bash">npm i aos4n/core</pre>
        <h1>使用</h1>
        <pre class="typescript">
import { getContainer } from "aos4n-core"

process.env.aos4nEntry = __filename

getContainer().runAsync()</pre>
    </div>
</template>