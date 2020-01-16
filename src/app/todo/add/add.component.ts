import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../services';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  todo: Todo;

  constructor(private route: ActivatedRoute, 
    private router: Router, private todoService: TodoService) {
      this.todo =new Todo();
     }

     ngOnInit() {
    }

    onSubmit() {
      this.todoService.save(this.todo).subscribe(result => this.gotoTodoList());
    }
  
    gotoTodoList() {
      this.router.navigate(['list']);
    }
 
}
