import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    nombre: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private _services:NewsapiservicesService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){ 
    console.log(this.form);
    const { username, password, nombre } = this.form;

    this._services.registro(username, password, nombre).subscribe(
      data => {
        this.router.navigate(['/news']);
      },
      err => {
        console.log('entra error');
        this.errorMessage = 'fallo el registro';
        this.isLoginFailed = true;
      }
      
    );

  }

}
