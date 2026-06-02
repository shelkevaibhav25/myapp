import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-adv',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgIf],
  templateUrl: './reactive-form-adv.component.html',
  styleUrl: './reactive-form-adv.component.css'
})
export class ReactiveFormAdvComponent {


  userForm!:FormGroup;


  constructor(private formBuilder:FormBuilder){

    // this.userForm = new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.email, Validators.required])
    // })

    this.userForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      city: [''],
      isDocumentNeeded : [false],
      documentName : [{value: '', disabled: true}],
      documentNo: [{value: '', disabled: true}]
    })

    this.userForm.controls['isDocumentNeeded'].valueChanges.subscribe((value)=>{
      const documentName = this.getFormControlName('documentName');
      const documentNo = this.getFormControlNameByGet('documentNo');
      
      if(value){
        documentName.enable();
        documentNo?.enable();
        documentName.addValidators([Validators.required]);
        documentNo?.addValidators([Validators.required]);
      }
      else{
        // documentName.disable();
        // documentNo?.disable();
        documentName.removeValidators([Validators.required]);
        documentNo?.removeValidators([Validators.required])
        documentName.reset();
        documentNo?.reset();
      }
    })

  }


  getFormControlName(controlName:string){
    return this.userForm.controls[controlName]

  }

  getFormControlNameByGet(controlName:string){
    return this.userForm.get(controlName)

  }








}
