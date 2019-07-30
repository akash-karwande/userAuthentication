import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Token } from '../models/token'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: any;
  id_token: string;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  login() {
   var data = {"email": this.email, "password": this.password, "returnSecureToken": true};
   this.apiService.userLogin(data).subscribe((response:Token) => {
     console.log(response);
      if (response !== null) {
        this.id_token = response.idToken;
        localStorage.setItem("id_token", this.id_token);
      }
   }, (error) => console.log(error),
   () => {
    this.router.navigate(['profile']);
   });
  }


}
