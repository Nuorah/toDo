import { Component, OnInit, Input} from '@angular/core';
import Todo from '../model/Todo';
import todosData from '../mocks/todoMocks.json';
import _ from 'lodash';

@Component({
	selector: 'app-todo-container',
	templateUrl: './todo-container.component.html',
	styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

	@Input()
	todos:Array<Todo> = todosData.map(todo => new Todo(todo.id, todo.title, todo.isDone));

	handleTodoChecked(todo){
		const todoToChange = todo;

		const todoList = _.without(this.todos, todo);

		this.todos = [...todoList, {...todoToChange, isDone : !todoToChange.isDone}].sort((a, b) => a.id - b.id)
	}

	getTodosLeft(){
		return this.todos.filter(todo => !todo.isDone).length;
	}

	constructor() { }

	ngOnInit() {
		
	}

	
}


