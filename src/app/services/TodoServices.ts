import Todo from '../model/Todo';
import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable({
	providedIn: 'root'
})
export default class TodoServices {
	todos:Todo[] = []

	add(title){
		const todoToAdd = new Todo(this.todos.length + 1, title);

		this.todos = [...this.todos, {...todoToAdd}].sort((a, b) => a.id - b.id)
	}

	toggle(todo){

		const todoToChange = todo;

		const todoList = _.without(this.todos, todo);

		this.todos = [...todoList, {...todoToChange, isDone : !todoToChange.isDone}].sort((a, b) => a.id - b.id)	
	}

	deleteAll(){
		this.todos = [];
	}

	delete(todo){
		console.log("delete");
		const todoList = _.without(this.todos, todo);

		this.todos = [...todoList].sort((a, b) => a.id - b.id)	
	}
}