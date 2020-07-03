import "https://cdn.jsdelivr.net/npm/vue/dist/vue.js";

const MagicButton = {
  data () {
    return {
      count: 0
    }
  },
  template: `
    <button @click='press'> {{ count }} </button>
  `,
  methods: {
    press() {
      this.count++
    }
  }
}

new Vue({
  el: '#app',
  components: { MagicButton },
  template: `<magic-button></magic-button>`
})