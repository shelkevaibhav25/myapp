import { Component } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-rx-js',
  standalone: true,
  imports: [],
  templateUrl: './rx-js.component.html',
  styleUrl: './rx-js.component.css'
})
export class RxJsComponent {

cityList: string[] = ["Pune", "mumbai", "nagpur"];

cityList$ = of(this.cityList, "Maharashtra", "Goa") //emit the value once

stateList$ = from(["Maharashtra", "Goa", "Rajstan"]) //emit the values one by one

interval$ = interval(1000); //after secs it will executing
timer$ = timer(5000); // it will execute only once
  constructor(){


    this.timer$.subscribe((value)=>{
      console.log("Time: ", value)
    })
    this.interval$.subscribe((value)=>{
      console.log(value)
    })

    this.stateList$.subscribe((states)=>{
      console.log(states)
    })

    this.cityList$.subscribe((data)=>{
      console.log(data)
    })

    const myObs = new Observable(value =>{
      value.next("This is demo text");
    })

    myObs.subscribe((value)=>{
      console.log(value)
    })

  }

}
