import Todo from '../model/Todo';
import { Injectable} from '@angular/core';
import ApiService from '../services/api.service';
import _ from 'lodash';

@Injectable({
	providedIn: 'root'
})
export default class TodoService{
	todos:Todo[] = []

	add(title){
		this.apiService.createTodo(new Todo(title))
		.subscribe((result:any) => {
			this.todos = [...this.todos, result].sort((a, b) => a.id - b.id);
		},() => {
			console.log('error');
		}, () => {
			//console.log('complete');
		});
		
	}

	toggle(todo){
		this.apiService.toggleTodo(todo)
		.subscribe((result:any) => {
			this.todos = [..._.without(this.todos, todo), result].sort((a, b) => a.id - b.id) 
		},() => {
			console.log('error');
		}, () => {
			//console.log('complete');
		});
	}

	deleteAll(){
		this.todos.forEach(todo => {this.delete(todo)})
	}

	delete(todo){
		this.apiService.deleteTodo(todo)
		.subscribe((result:any) => {
			this.todos = _.without(this.todos, todo);
		},(e:any) => {
			console.log(e);
		}, () => {
			//console.log('complete');
		});
	}

	constructor(private apiService: ApiService){}

	initialize() {
		this.apiService.getAllTodos()
		.subscribe((result:any) => {
			this.todos = result.map(td => new Todo(td.title, td.isDone, td.id))
		},() => {
			console.log('error');
		}, () => {
			//console.log('complete');
		});
	}
}