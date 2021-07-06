import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-app';
  todos = [{element:null, done:false}];

  addTodo(newTodoLabel: any){
    var newTodo = {
      element:newTodoLabel,
      done:false
    };
    this.todos.push(newTodo);
  }
}
