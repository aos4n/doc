<template>
    <div class="app">
        <app-header></app-header>
        <div class="main">
            <app-menu></app-menu>
            <app-content></app-content>
        </div>
    </div>
</template>

<style scoped>
.app {
    height: 100%;
}

.main {
    height: calc(100% - 50px);
    display: flex;
}
</style>

<script>
import './assets/scss/index.scss'
import store from './store'
import router from './router'
import './highlight'

export default {
    store,
    router,
    data() {
        return {
            stSetWindowWidth: null,
        }
    },
    computed: {

    },

    mounted() {
        this.$store.commit('setWindowWidth', window.innerWidth)
        window.onresize = () => {
            clearTimeout(this.stSetWindowWidth)
            this.stSetWindowWidth = setTimeout(() => {
                this.$store.commit('setWindowWidth', window.innerWidth)
            }, 50)
        }
    },
    methods: {

    }
}
</script>