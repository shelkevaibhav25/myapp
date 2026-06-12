import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-template-container',
  standalone: true,
  imports: [],
  templateUrl: './ng-template-container.component.html',
  styleUrl: './ng-template-container.component.css'
})
export class NgTemplateContainerComponent {


  userServc=  inject(UserService)
  router = inject(Router)
  userdata:any;

  constructor(){

    this.userServc.userInfo$.subscribe((data)=>{
      console.log(data)
      this.userdata = data
    })

  }

  onButtonClick(){

    // this.router.navigate(['/RxJs-operator', 101])

    // //query parameters
    // this.router.navigate(['RxJs-operator'], {
    //   queryParams:{
    //     role:'admin',
    //     city:'pune'
    //   }
    // })

    //navigation state: 

    this.router.navigate(['RxJs-operator'], {
      state:{
        role:'admin',
        city:'pune'
      }
    })

}

}
