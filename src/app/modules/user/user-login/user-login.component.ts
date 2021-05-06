import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserPayload} from '../user';
import {UserService} from '../controls/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.sass']
})
export class UserLoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isSubmitted = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  public onSubmit() {
    this.isSubmitted = !this.isSubmitted;
    if (this.loginForm.invalid) {
      this.isSubmitted = false;
      return;
    }

    const userPayload: UserPayload = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
      returnSecureToken: true
    };

    this.userService.userLogin(userPayload)
      .subscribe( (res) => {
        console.log(res);
      }, error => {
        this.isSubmitted = false;
        alert(error.error.error.message);
        console.log(error);
      },
      () => {
        this.isSubmitted = false;
        this.router.navigate(['/githuber', 'projects']);
      }
    );
  }
}
