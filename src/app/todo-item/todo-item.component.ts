import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import Todo from '../model/Todo';
import TodoServices from '../services/TodoServices';

@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

	@Input()
	todo:Todo;
	
	toggle(){
		this.todoServices.toggle(this.todo);
	}

	delete(){
		this.todoServices.delete(this.todo);
	}

	constructor(private todoServices: TodoServices) {
	}

	ngOnInit() {
	}

}
