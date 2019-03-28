import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import TodoService from '../services/todo.service';

@Component({
	selector: 'app-todo-form',
	templateUrl: './todo-form.component.html',
	styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

	value:string = '';

	deleteAll(){
		this.todoService.deleteAll()
	}

	changeValue(event){
		if(event.key === "Enter"){
			this.add();
		} else {
			this.value = event.target.value;
		}
	}

	add(){
		this.todoService.add(this.value);
	}

	constructor(private todoService: TodoService) { }

	ngOnInit() {
	}

}
