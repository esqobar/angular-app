
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { TodoService } from '../../services';
import { Todo } from '../../models/todo';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  todo: Todo;

  constructor(private route: ActivatedRoute, private todoService: TodoService,
    private router: Router) { }

  ngOnInit() {
    this.todo = this.todoService.getter();
  }

  update() {
    this.todoService.update(this.todo).subscribe(
    data => {
    this.router.navigate(['list']);
    }
    );
  }

}