class Todo {
	constructor(title) {
		this.title = title;
		this.isDone = false;
	}
	switchDone() {
		this.isDone = !this.isDone;
	}
}

Vue.component("todo-list", {
	template: `
		<div id="todo-list">
		<h1>To do:</h1>
		<div class="filters">
			<label>Show done:</label>	
			<input type="checkbox" v-model="showDone" >
		</div>
		<ul>
			<task
				v-if="showDone || !todo.isDone"
				v-for="(todo,index) in todos"
				:title="todo.title"
				:is-done="todo.isDone"
				@checked="checkTodo(index)"
				@deleted="deleteTodo(index)"
			>
			</task>
		</ul>
		<div class="new-task">
			<div>Task:</div>
			<input type="text" v-model="task" @keyup.enter="saveTodo" />
			<div class="save_task">
				<button @click="saveTodo">Save item</button>
			</div>
		</div>
	</div>
	`,
	data() {
		return {
			todos: [new Todo("Something")],
			task: "",
			showDone: true,
		};
	},
	methods: {
		saveTodo() {
			if (this.task.length > 5) {
				this.todos.push(new Todo(this.task));
				this.task = "";
			}
		},
		checkTodo(index) {
			this.todos[index].switchDone();
		},
		deleteTodo(index) {
			this.todos.splice(index, 1);
		},
	},
});

Vue.component("task", {
	template: `
		<li :class="{ done: isDone }" class="task"> 
			<div class="title"> {{ title }} </div>
			<div class="controls">
 				<div class="check" @click="$emit('checked')">&#x2713</div>
				<div class="delete" @click="$emit('deleted')">&#x2715</div>
			</div>
		</li>
	`,
	props: ["title", "isDone"],
});

var app = new Vue({
	el: "#app",
});
