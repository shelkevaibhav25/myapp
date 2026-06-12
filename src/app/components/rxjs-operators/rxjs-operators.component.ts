import { Component, inject } from '@angular/core';
import { filter, from, map, of } from 'rxjs';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.css'
})
export class RxjsOperatorsComponent {

userServ = inject(UserService)
role!:string
city!:string

routeActivate = inject(ActivatedRoute)

  noList$ = from([11,12,13,14,15,17,18,20])

  rollNoList = of([11,12,13,14,15,17,18,20])

  constructor(){
    // this.noList$.pipe(
    //   filter((num=>num % 2 === 0))
    // ).subscribe((res)=>{
    //   console.log(res)
    // })

    // this.rollNoList.pipe(
    //  map((result)=> result.filter(m => m % 2 ===0))
    // ).subscribe((result)=>{
    //   console.log(result)
    // })

    this.userServ.getUsers().subscribe((users)=>{
      console.log(users)
    })

    this.userServ.getSingleUser().subscribe((response)=>{
      console.log(response)
    })
    
  }

  ngOnInit(){

    // Route Parameters

  //  const id =  this.routeActivate.snapshot.paramMap.get('id')
  //  console.log(id)


//Query Parameters
 this.routeActivate.queryParamMap.subscribe((params)=>{
    
    this.city = params.get('city') as string 
    this.role  = params.get('role') as string

    console.log(`city is ${this.city} and role is ${this.role}`)
})

const queryParams = this.routeActivate.queryParams.subscribe(
  params => {
    console.log(params) // it gives plain javascript object {"role": "admin", "city": "pune"}

    this.city = params['city']
    this.role = params['role']
     console.log(`using query params city is ${this.city} and role is ${this.role}`)
  }
)


const data = history.state
this.city = data.city
this.role = data.role
console.log(`using navigation state city is ${this.city} & role is ${this.role}`)





  }


}
