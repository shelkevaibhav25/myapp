import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  http = inject(HttpClient)

  constructor() { }


  saveCategory(categoryObj:any){
    return this.http.post('https://api.freeprojectapi.com/api/Enquiry/create-category', categoryObj)
  }

  getCategories(){
    return this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-categories")
  }

  editCategory(categoryObj:any){
    return this.http.put(`https://api.freeprojectapi.com/api/Enquiry/update-category/${categoryObj.categoryId}`, categoryObj)
    
  }


}
