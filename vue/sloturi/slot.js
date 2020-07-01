import "https://cdn.jsdelivr.net/npm/vue/dist/vue.js";

Vue.component('my-link', {
  template: `
    <a :url="url">
      <slot></slot>
    </a>
  `,
  props: ['url']
})

new Vue({
  el: '#app'
})