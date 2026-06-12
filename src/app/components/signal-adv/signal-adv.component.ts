import { Component, computed, effect, signal } from '@angular/core';

interface Student {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  grade: string;
  enrollmentDate: string;
}

@Component({
  selector: 'app-signal-adv',
  standalone: true,
  imports: [],
  templateUrl: './signal-adv.component.html',
  styleUrl: './signal-adv.component.css'
})

export class SignalAdvComponent {

  firstName = signal<string>('Vaibhav')
  lasttName = signal<string>('shelke')

  fullName = computed(()=>{
    return this.firstName() + " " + this.lasttName()
  })


  studentList = signal<Student[]>([
    { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', isActive: true, grade: 'A', enrollmentDate: '2024-01-15' },
    { id: 2, name: 'Priya Verma', email: 'priya@example.com', isActive: true, grade: 'A+', enrollmentDate: '2024-02-20' },
    { id: 3, name: 'Amit Patel', email: 'amit@example.com', isActive: false, grade: 'B', enrollmentDate: '2024-03-10' },
    { id: 4, name: 'Neha Singh', email: 'neha@example.com', isActive: false, grade: 'A', enrollmentDate: '2024-01-25' },
    { id: 5, name: 'Vikram Desai', email: 'vikram@example.com', isActive: true, grade: 'B+', enrollmentDate: '2024-04-05' }
  ])


  activeStudentList = computed(()=>{
    return this.studentList().filter(m => m.isActive)
  })




  constructor(){
    effect(()=>{
      console.log("first name " + this.firstName())
       
    })
    effect(()=>{
    
       console.log("last name " + this.lasttName())
    })

    effect(()=>{
    
       console.log("First +_ last name " + this.lasttName() + this.firstName())
    })
    setTimeout(()=>{
      this.firstName.set("Rahul")
      this.lasttName.set("Sharma")

    }, 5000)

    setTimeout(()=>{

      const oldData = this.studentList()
     
      this.studentList.update(oldData => [...oldData,  { id: 6, name: 'Vikram Sharma', email: 'vikram@example.com', isActive: true, grade: 'B+', enrollmentDate: '2024-04-05' } ])

    }, 6000)



    
   


  }

}
