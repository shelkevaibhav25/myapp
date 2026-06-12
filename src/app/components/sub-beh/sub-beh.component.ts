import { Component, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sub-beh',
  standalone: true,
  imports: [],
  templateUrl: './sub-beh.component.html',
  styleUrl: './sub-beh.component.css'
})
export class SubBehComponent {


  sudentName$ = new Subject<string>();

  rollNo$ = new Subject<number>();

  takeTill = new Subject<void>(); //not going to emit any value

  courseName: Subject<string> = new Subject<string>();

  userServ = inject(UserService)




  // constructor(){
  //   setTimeout(()=>{
  //      this.rollNo$.next(123);
  //      this.takeTill.next();
  //      this.userServ.courseDuration.next("1 month")
  //   })
   
  // }

  constructor(){

    this.userServ.roleBehavious$.subscribe((role)=>{
      debugger
    })
    this.userServ.roleSub$.subscribe((role)=>{
      debugger
      console.log(role)
  })
    
  }


  ngOnInit(){
    debugger
    this.userServ.courseDuration.subscribe((value)=>{
      console.log(value)
    })
    this.rollNo$.subscribe((value)=>{
      console.log(value)
    })
  }

}
