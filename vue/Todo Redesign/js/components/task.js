Vue.component('task', {
	template: `
		<li :class="{ done: todo.isDone }" class="task" @click="$emit('checked')" @dblclick="todo.editable = true" >
      <div class="color_and_title">
        <div class="color" :style="{ backgroundColor: todo.color } "></div>
        <div class="title" v-show = "todo.editable == false"> {{ todo.title }}</div>
        <input v-show = "todo.editable == true" v-model = "todo.title"
            v-on:blur= "todo.editable=false; $emit('update')"
            @keyup.enter = "todo.editable=false; $emit('update')">
      </div>
			<div class="controls">
			  <div class="delete" @click="$emit('deleted')">&#x2715</div>
			</div>
		</li>
	`,
	props: ['todo'],
	methods: {},
});
