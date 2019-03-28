import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Todo from '../model/todo';

@Injectable({
	providedIn: 'root'
})
export default class ApiService {

	getAllTodos() {
		return this.http.get('http://localhost:3000/todos');
	}

	getTodo(id:number){
		return this.http.get(`http://localhost:3000/todos/${id}`);
	}

	createTodo(todo:Todo){
		return this.http.post('http://localhost:3000/todos', todo);
	}

	toggleTodo(todo:Todo){
		return this.http.put(`http://localhost:3000/todos/${todo.id}`, {...todo, isDone : !todo.isDone});
	}

	deleteTodo(todo:Todo){
		return this.http.delete(`http://localhost:3000/todos/${todo.id}`);
	}

	constructor(private http: HttpClient) { }
}
