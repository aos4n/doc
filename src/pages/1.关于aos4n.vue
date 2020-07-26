<template>
    <div class="page-narrow">
        <h1>关于aos4n</h1>
        <p>诚然，市面上已经有诸如koa、express、fasitify、eggjs、thinkjs、nestjs、midwayjs等优秀的nodejs的web框架，我为什么还要开发aos4n呢？</p>
        <p>2018年，当我初次从事nodejs开发时，公司的web应用是基于express的，当时我看应用的路由都需要手动一个个声明，结合自己以前做asp.net mvc以及Java开发的经验，深感这种机械的劳动的繁琐且易出错，继而想要重构这个应用。</p>
        <p>然后开始选型，当时我了解到了eggjs、nestjs。</p>
        <p>eggjs：router依然需要手动声明，排除。</p>
        <p>nestjs：号称是nodejs界的spring，嗯，确实已经很像了，装饰器、依赖注入，但是我感觉设计者当初更多的是为了模仿angular，搭建应用略显繁琐，所以也暂时排除了。</p>
        <p>然后，喜欢造轮子的我决定打造一款更适合自己的框架。</p>
        <p>我希望这个框架具有以下优点</p>
        <ol>
            <li><p>不需要手动声明路由</p></li>
            <li><p>具有良好的类型提示</p></li>
            <li><p>切面编程</p></li>
        </ol>
        <p>最终，我打造出了aos4n</p>
        <p>我给aos4n的定位是一款nodejs的应用框架，注意：是应用框架，而非限定于web框架。设计思想借鉴了spring，基于一套统一的理论：组件、依赖注入、切面编程，构建更多上层应用，比如web、game、cloud……</p>
        <p>使用Typescript开发，充分利用Typescript的各种优势。比如：Typescript的伪强类型可以帮助我们构建更加复杂的应用，而装饰器可以帮助我们更优雅的实现切面编程。</p>
        <p>为了便于维护，分离出一套核心库：core，提供基础的依赖注入、依赖注入功能。同时，不同类型的功能，比如web、game，拆分为不同的库，开发者可以按需引用。</p>
        <p>（题外话：后来我了解到thinkjs，感觉这个框架跟自己理想的还是比较接近的，当初要是了解到这个框架，可能就直接采用而不是自己开发了。）</p>
    </div>
</template>
<script>
export default {
    path: '/'
}
</script>