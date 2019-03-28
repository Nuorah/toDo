import { Component, OnInit, Input} from '@angular/core';
import Todo from '../model/todo';
import TodoService from '../services/todo.service';
import ApiService from '../services/api.service';


@Component({
	selector: 'app-todo-container',
	templateUrl: './todo-container.component.html',
	styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

	@Input()
	todoToAdd:string;

	getTodosLeft(){
		return this.todoService.todos.filter(todo => !todo.isDone).length;
	}

	constructor(private todoService: TodoService, private apiService: ApiService) { }

	ngOnInit() {
		this.todoService.initialize();
	}
}


