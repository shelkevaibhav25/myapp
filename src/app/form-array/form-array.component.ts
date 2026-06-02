import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { single } from 'rxjs';

@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {


  employeeForm!:FormGroup;
  formBuilder = inject(FormBuilder)

  employeeArray = signal<any[]>([]);

  constructor(){
    


    const localData = localStorage.getItem('formArray')

    if(localData!=null){
      this.employeeArray.set(JSON.parse(localData))
    }

    this.employeeForm = this.formBuilder.group({
      empName:[''],
      mobile:[''],
      city:[''],
      state:[''],
      projects: this.formBuilder.array([])
    })

  //  const projectArray =  this.employeeForm.controls['projects'] as FormArray
  //  projectArray.push(this.createProjectForm());

  this.getProjetFormControlArray.push(this.createProjectForm())



  }

  get getProjetFormControlArray():FormArray{
    return this.employeeForm.controls['projects'] as FormArray
  }

  createProjectForm():FormGroup{
    return this.formBuilder.group({
      projectName:[''],
      leadName:[''],
      technology:['']
    })
  }

  addProject(){
    this.getProjetFormControlArray.push(this.createProjectForm())
  }

  removeForm(index:any){
    this.getProjetFormControlArray.removeAt(index)

  }

  onSaveEmployeeForm(){

    const formValue = this.employeeForm.value
    
    this.employeeArray.update((old) => [...old, formValue]);
    localStorage.setItem('formArray', JSON.stringify(this.employeeArray()))


  }



}
