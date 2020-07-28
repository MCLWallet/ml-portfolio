// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import { BootstrapVue,BootstrapVueIcons } from 'bootstrap-vue'

import '~/assets/quenda-medium.css'
import '~/assets/global.scss'
import '~/assets/fonts.scss'
import '~/assets/animations.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
  Vue.use(BootstrapVueIcons)
}
