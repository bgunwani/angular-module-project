import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  userObj: any = {
    name: 'king kochhar',
    amount: 24334000.567895432
  }

}
