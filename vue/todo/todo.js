var app = new Vue({
	el: '#app',
	data: {
		todos: [],
		task: '',
	},
	methods: {
		addItem() {
			if (this.task.length > 5) {
				this.todos.push(this.task);
				this.task = '';
			}
		},
	},
});
