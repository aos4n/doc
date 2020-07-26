<template>
    <div class="page-narrow">
        <h1>@BindHeader</h1>
        <p>绑定header中的参数</p>
        <pre class="typescript">
@Mapping()
index8(@BindHeader('ticket') ticket: string) {
    return ticket
}</pre>
    </div>
</template>