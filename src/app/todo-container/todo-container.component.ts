import { Component, OnInit, Input} from '@angular/core';
import Todo from '../model/Todo';
import TodoServices from '../services/TodoServices';


@Component({
	selector: 'app-todo-container',
	templateUrl: './todo-container.component.html',
	styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

	@Input()
	todoToAdd:string;

	getTodosLeft(){
		return this.todoServices.todos.filter(todo => !todo.isDone).length;
	}

	constructor(private todoServices: TodoServices) { }

	ngOnInit() {
		
	}

	
}


