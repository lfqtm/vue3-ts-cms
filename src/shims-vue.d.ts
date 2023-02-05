import store from './store'

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  store
  const component: DefineComponent<{}, {}, any>
  export default component
}
