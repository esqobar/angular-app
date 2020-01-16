import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../services';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  todos: Todo[];
  todo: Todo;
  constructor(private route: ActivatedRoute, 
    private router: Router,private todoService:TodoService) { }

    ngOnInit() {
      this.reloadData();
     }
   
     reloadData(){
       this.todoService.getTodos().subscribe(
         data => {
           this.todos=data;
         });
     }

     delete(id){
      this.todoService.delete(id).subscribe( data => {
        this.reloadData();
      });
    }
  
    
    update(todo: Todo) {
     this.todoService.setter(todo);
     this.router.navigate(['edit']);
     
    }

    show(todo: Todo) {
      this.todoService.setter(todo);
      this.router.navigate(['show']);
     }
  
    gotoBookList() {
      this.router.navigate(['list']);
    }

}
