Vue.component('hello', {
	template: '<h3>{{ text }}</h3>',
	// proprietatile componentei pot fi trasmise din exterios
	props: ['text'],
});

Vue.component('button-counter', {
	template:
		"<button @click='click'>You clicked me {{ clicks }} times.</button>",
	data() {
		return {
			clicks: 0,
		};
	},
	methods: {
		click() {
      this.clicks++;
      $emit('counter-clicked', this.clicks);
		},
	},
});

var app = new Vue({
	el: '#app',
});
