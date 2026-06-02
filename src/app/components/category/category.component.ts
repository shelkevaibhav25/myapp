import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categories = signal<any []>([])

  userServ = inject(UserService)
  categoryForm: FormGroup = new FormGroup({
    categoryId: new FormControl(0),
    categoryName:new FormControl(''),
    isActive: new FormControl(false)

  })

  ngOnInit(){

    this.getAllCategories();

  }



  onSave(){
    console.log(this.categoryForm)
    debugger
    const formValue = this.categoryForm.value
   
    this.userServ.saveCategory(formValue).subscribe({
      next:(res:any)=>{
         debugger
        alert("Category created succesfully")
        this.categoryForm.reset();
      },
      error:(error:any)=>{
        alert("API error occured")
      }
    })

  }

  getAllCategories(){
    this.userServ.getCategories().subscribe({
      next:(res:any)=>{
        this.categories.set(res?.data)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  onEditCategory(categoryObj:any){
    console.log(categoryObj)
    debugger

    this.categoryForm.patchValue({
      categoryId: categoryObj.categoryId,
      categoryName:categoryObj.categoryName,
      isActive: categoryObj.isActive
    })

     this.categoryForm.setValue({
      categoryId: categoryObj.categoryId,
      isActive: categoryObj.isActive
    })

    

  }

  updateCategory(){
    console.log(this.categoryForm)
    const formValue = this.categoryForm.value
    this.userServ.editCategory(formValue).subscribe({
      next:(res:any)=>{
        alert("Category Updated")
        this.getAllCategories();
      },
      error:(error)=>{
        alert("Operation failed")
      }
    })
  }

  onCancel(){
    this.categoryForm.reset();
  }



}
