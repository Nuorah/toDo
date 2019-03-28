export class Todo{
	id:number;
	title:string;
	isDone:Boolean;

	constructor(title:string, isDone:Boolean = false, id?:number){
		this.id = id;
		this.title = title;
		this.isDone = isDone;
	}
}

export default Todo;