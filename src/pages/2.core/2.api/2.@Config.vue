<template>
    <div class="page-narrow">
        <h1>@Config</h1>
        <p>使用@Config标记一个类为配置文件映射器。使用配置文件映射器，而不是require('config.json')，前者得到的对象具有类型声明，更便于使用。</p>
        <p>field参数表示映射器映射的配置节，如果不传，表示整个配置文件，使用a.b.c映射a节下的b节下的c。</p>
        <p>⚠️所以，不要在你的配置文件中使用任何类似于a.b表示一个节，这会使配置映射器出错。</p>
        <pre class="typescript">
{
    "mysql": {
        "host": "127.0.0.1",
        "port": 3306,
        "user": "root",
        "password": "524163",
        "db": "test1"
    }
}</pre>
    </div>
</template>