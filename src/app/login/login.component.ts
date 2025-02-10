import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private _authService: AuthService,
    private _router: Router) { }

  login() {
    if (this._authService.login(this.username, this.password)) {
      console.log(this.username, this.password);
      this._router.navigate(['/protected'])
    } else {
      alert('Invalid Credentials');
    }
  }

}
