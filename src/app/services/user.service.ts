import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  http = inject(HttpClient)

  courseDuration = new BehaviorSubject<string>("3 months");


  roleBehavious$ = new BehaviorSubject("")
  roleSub$ = new Subject();

   localData = {

    name:"Vaibhav Shelke",
    email:"vaib@gmail.com",
    userId:"VaibShelke"

    }

  userInfo$ = new BehaviorSubject(this.localData);

  constructor() { 
  }




  saveCategory(categoryObj:any){
    return this.http.post('https://api.freeprojectapi.com/api/Enquiry/create-category', categoryObj)
  }

  getCategories(){
    return this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-categories")
  }

  editCategory(categoryObj:any){
    return this.http.put(`https://api.freeprojectapi.com/api/Enquiry/update-category/${categoryObj.categoryId}`, categoryObj)
    
  }

  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      map((userList:any) => userList.map((user:any)=>{
        return {
          userName: user.name,
        email: user.email

        }
      }))
    )
  }

  getSingleUser(){

    return this.http.get("https://jsonplaceholder.typicode.com/users/2").pipe(
      map((result:any)=> result.address)

    )

  }


}
