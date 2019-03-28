import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Todo from '../model/Todo';
import TodoServices from '../services/TodoServices';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

	@Input()
	todos:Todo[];

	constructor(private todoServices: TodoServices) { }

	ngOnInit() {
	}

}
