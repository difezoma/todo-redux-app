
export class Todo{
    public text: string;
    public id: number;
    public completed: boolean;

    constructor(text: string){
        this.text = text;
        this.id = Math.random();
        this.completed = false;
    }
}