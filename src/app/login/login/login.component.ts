import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { AuthUtilService } from '../auth-util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl;
  message;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private AuthUtil: AuthUtilService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  public onSubmit() {
    this.submitted = true;
    console.log("Fomulario Submetido");

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;  
    this.loginService
      .login(this.f.username.value, this.f.password.value)
      .subscribe(
        (data) => {
          this.loading = false;
          console.log(data);
          localStorage.setItem('token', data);
          this.AuthUtil.currentTokenValue = data;

          // Redirecionar a View
          this.router.navigate(['/']);
        },
        (error) => {
          this.loading = false;
          this.message = error;
        }
      );


  }

}
