<template>
    <div class="page-narrow">
        <h1>@ScheduleJob</h1>
        <p>在组件中，标记一个方法为计划任务，支持异步方法，aos4n使用node-schedule来实现计划任务</p>
        <pre class="typescript">
@StartUp()
export class StartUp9 {
    n: number = 1
    @ScheduleJob('* * * * * *')
    job() {
        this.n = 2
    }
}</pre>
    </div>
</template>