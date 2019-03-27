import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Todo from '../model/Todo';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

	@Input()
	todos:Todo<Array>;

	@Output()
	todoChecked:EventEmitter<Todo> = new EventEmitter<Todo>();

	handleTodoChecked(todo){
		this.todoChecked.emit(todo);
	}	

	constructor() { }

	ngOnInit() {
	}

}
