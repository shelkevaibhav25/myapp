import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hide-show-ng-if',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './hide-show-ng-if.component.html',
  styleUrl: './hide-show-ng-if.component.css'
})
export class HideShowNgIfComponent {
isShow:boolean = true
caste!:string;
checkBoxValue:boolean = true;
textValue!:string;
isValuePresent:boolean = true;
address!:string;
isPinPresent:boolean = false;
isSearchPinClicked = false;
  hide(){
    this.isShow = !this.isShow
  }

  show(){
    this.isShow = true
  }

  visibility(action:string){
    if(action === 'Show'){
      this.isShow = true
    }
    else{
      this.isShow = false
    }
  }

  textBoxHasValue(){
   
    if(this.textValue.length > 0){
      this.isValuePresent = false
      
    }else{
      this.isValuePresent = true
    }
  }

  searchPin(){
     this.isSearchPinClicked = true
    this.isPinPresent = this.address.includes('pin')
    
  }



}
