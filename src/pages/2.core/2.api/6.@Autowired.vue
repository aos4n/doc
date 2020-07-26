<template>
    <div class="page-narrow">
        <h1>@Autowired</h1>
        <p>用于属性注入，用法如下</p>
        <pre class="typescript">
@Component()
export class MyComponent{
  @Autowired(UserService)
  userService: UserService

  index(){
    return this.userService.doSomething()
  }
}</pre>
    </div>
</template>