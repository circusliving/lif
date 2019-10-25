import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f0c27f2 = () => interopDefault(import('../pages/call-single-listing.vue' /* webpackChunkName: "pages/call-single-listing" */))
const _3006e96a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/call-single-listing",
    component: _2f0c27f2,
    name: "call-single-listing"
  }, {
    path: "/",
    component: _3006e96a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
