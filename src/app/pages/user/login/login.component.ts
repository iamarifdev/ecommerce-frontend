import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { AsyncService } from '../../../shared/services/async.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  submitForm(): void {}

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public asyncService: AsyncService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      phoneNo: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const { phoneNo, password } = this.loginForm.value;
      this.asyncService.start();
      this.userService.authenticate(phoneNo, password).subscribe(
        (response) => {
          if (response.success) {
            this.router.navigate(['/home']);
          }
          this.asyncService.finish();
        },
        (error) => {
          this.asyncService.finish();
          // TODO: add login error message
          console.log('Login error: ', error);
        }
      );
    }
  }
}
