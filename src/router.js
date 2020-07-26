import Vue from 'vue'
import VueRouter from "vue-router";
import { routes } from './componentIndex'
Vue.use(VueRouter)
import hljs from 'highlight.js/lib/core'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  routes
})
let contentEl = null
router.afterEach(() => {
  Vue.nextTick(() => {
    if (contentEl == null) {
      contentEl = document.getElementsByClassName('content')[0]
    }
    let els = contentEl.querySelectorAll('pre, code')
    els.forEach(a => {
      hljs.highlightBlock(a)
    })
  })
})
export default router