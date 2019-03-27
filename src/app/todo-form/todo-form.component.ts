import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'app-todo-form',
	templateUrl: './todo-form.component.html',
	styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

	value:string = '';

	@Output()
	todoToAdd:EventEmitter<string> = new EventEmitter<string>();

	@Output()
	resetTodosEvent:EventEmitter<string> = new EventEmitter<string>();

	resetTodos(){
		this.resetTodosEvent.emit()
	}

	changeValue(event){
		this.value = event.target.value;
	}

	giveTodoToAdd(){
		this.todoToAdd.emit(this.value);
		console.log(this.value);
	}

	constructor() { }

	ngOnInit() {
	}

}
