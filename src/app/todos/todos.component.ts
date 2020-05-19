import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos;
  title = "Title";

  constructor(private todosService: TodosService) { 
    this.todosService.getTodos().subscribe(data => {
      this.todos = data;
    })
  }

  ngOnInit(): void {
    
  }

 
}
