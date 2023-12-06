/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos=[];
  }
  add(todo){
    this.todos.push(todo);
  }
  remove(idx){
    if(idx<this.todos.length){
      for(let i=idx;i<this.todos.length;i++){
        this.todos[i]=this.todos[i+1];
      }
      this.todos.pop();
    }
  }
  update(idx,todo){
    if(idx<this.todos.length)
      return this.todos[idx]=todo;
  }
  getAll(){
    return this.todos;
  }
  get(idx){
    if(idx>=this.todos.length)return null;
    return this.todos[idx];
  }
  clear(){
    this.todos=[];
  }
}
module.exports = Todo;
