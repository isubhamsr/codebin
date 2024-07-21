import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private dbService:DbService){}

  onSignup(regForm:NgForm){
    console.log(regForm.value);
    // this.authService.signupUser(regForm.value.email, regForm.value.password)
    // this.route.navigate(['/login'])
    this.dbService.dbCon()
  }
}
