import { Todo } from '../class/Todo.js';

Vue.component('todo-list', {
	template: `
		<div id="todo-list">
		<h1> {{ list_name }}</h1>
		<div class="filters">
			<label>Show done:</label>	
			<input type="checkbox" v-model="showDone" >
		</div>
		<ul>
			<task
				v-if="showDone || !todo.isDone"
				v-for="(todo,index) in todos"
				:todo="todo"
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
			todos: [new Todo('Something')],
			task: '',
			showDone: true,
		};
	},
	props: ['list_name'],
	methods: {
		saveTodo() {
			if (this.task.length > 5) {
				this.todos.push(new Todo(this.task));
				this.task = '';
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
