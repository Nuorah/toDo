import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import Todo from '../model/Todo';

@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

	@Input()
	todo:Todo;

	@Output()
	todoChecked:EventEmitter<Todo> = new EventEmitter<Todo>();
	
	handleCheckBoxChange(){
		//this.todo.isDone = !this.todo.isDone;
		this.todoChecked.emit(this.todo);
	}

	constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
		iconRegistry.addSvgIcon(
			'delete',
			sanitizer.bypassSecurityTrustResourceUrl('assets/img/delete.svg'));
	}

	ngOnInit() {
	}

}
