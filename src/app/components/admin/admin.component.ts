import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

router = inject(Router)

navigateTOdata(){
  this.router.navigateByUrl('dataTypes')
}

navigateTOdatabinding(){
  this.router.navigate(['/data-binding'])
}

}
