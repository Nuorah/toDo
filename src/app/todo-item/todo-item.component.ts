import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import Todo from '../model/todo';
import TodoService from '../services/todo.service';

@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

	@Input()
	todo:Todo;
	
	toggle(){
		this.todoService.toggle(this.todo);
	}

	delete(){
		this.todoService.delete(this.todo);
	}

	constructor(private todoService: TodoService) {
	}

	ngOnInit() {
	}

}
