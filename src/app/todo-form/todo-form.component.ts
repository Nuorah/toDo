import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import TodoServices from '../services/TodoServices';

@Component({
	selector: 'app-todo-form',
	templateUrl: './todo-form.component.html',
	styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

	value:string = '';

	deleteAll(){
		this.todoServices.deleteAll()
	}

	changeValue(event){
		if(event.key === "Enter"){
			this.add();
		} else {
			this.value = event.target.value;
		}
	}

	add(){
		this.todoServices.add(this.value);
	}

	constructor(private todoServices: TodoServices) { }

	ngOnInit() {
	}

}
