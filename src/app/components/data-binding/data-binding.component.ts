import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName:string = "Angular 21"
  courseDuration:string = "3 months"

  userServ = inject(UserService )


  myInputType = "checkbox"

  minChar = 4;
  maxCharAllowed=6;
  myClassName = "col-2 bg-danger"


  showWelcomeText(){
    alert("welcome to B-33 batch")
  }

  showMessage(message: string){
    alert(message)

  }

  onCityChange(){
    alert("city changed")
  }

  onMouseEnter(){
    console.log("Mouse entered in div")
  }


  constructor(){

    this.userServ.roleBehavious$.subscribe((role)=>{
      debugger
    })
    this.userServ.roleSub$.subscribe((role)=>{
      debugger
      console.log(role)
  })
    
  }


  // ngOnInit(){
  //    this.userServ.roleSub$.subscribe((role)=>{
  //     debugger
  //     console.log(role)
  // })
  // }






}
