import { ChangeDetectionStrategy, Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-singal',
  standalone: true,
  imports: [],
  templateUrl: './singal.component.html',
  styleUrl: './singal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingalComponent {

  courseName:string = "Angular"
  currentRollNo: number = 12;

  courseDuration = signal('3 months')

  isBatchActive: WritableSignal<boolean> = signal(true); //should be able to change the value


  cityList = signal(["Pune","Nagpur","Mumbai"])

  studentObj = signal({
    name:'Rahul',
    city:'Pune',
    state:'MH'
  })




  constructor(){

    setTimeout(()=>{
       this.courseName = "React Js"
    }, 3000)

    setTimeout(()=>{
      this.courseDuration.set("5 Months 2 weeks ")
    }, 5000)


    effect(()=>{
      debugger
      console.log(this.isBatchActive())
      const CoursedurationFirstChar = this.courseDuration().charAt(0);
    })

    effect(()=>{
      debugger
      const CoursedurationFirstChar = this.courseDuration().charAt(0);
    })
 


  }

  onDurationChange(){
    this.courseDuration.set('2 months and 1 week')
  }

  addCity(){
    this.cityList.update(oldList => [...oldList, 'Thane'])
  }

}
