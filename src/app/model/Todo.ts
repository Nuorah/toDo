export class Todo{
	id:number;
	title:string;
	isDone:Boolean;

	constructor(id:number, title:string, isDone:Boolean = false){
		this.id = id;
		this.title = title;
		this.isDone = isDone;
	}
}

export default Todo;