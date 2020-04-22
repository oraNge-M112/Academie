class Todo {
	constructor(title) {
		this.title = title;
		this.isDone = false; 
	}
	switchDone() {
		this.isDone()
	}
}

Vue.component('task', {
	template: `
		<li :class="{ done: isDone }"> 
			<div class="title"> {{ title }}</div>
			<div class="controls">
				<div class="check" @click:"$emit('checked')">✓</div>
				<div class="delete" @click:"$emit('deleted')">❌</div>
			</div>
		</li>
	`,
	props: ['title', 'isDone']
});


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
