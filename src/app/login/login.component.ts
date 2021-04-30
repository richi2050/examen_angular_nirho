import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsapiservicesService } from '../service/newsapiservices.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';


  //public loginError:String;

  constructor(private _services:NewsapiservicesService,private router: Router) { }

  ngOnInit(): void {
 
  }

  onSubmit(){ 
    const { username, password } = this.form;

    this._services.login(username, password).subscribe(
      data => {
        console.log('entra a daa');
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/news']);
      },
      err => {
        console.log('entra error');
        this.errorMessage = 'Usuario no encontrado ó password incorrecta';
        this.isLoginFailed = true;
      }
    );

  }

  

}
