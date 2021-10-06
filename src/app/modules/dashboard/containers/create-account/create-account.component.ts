import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {UserService} from '../../../auth/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
  }

  get controls(): { [key in 'username' | 'password' | 'email' | 'role' | string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
      role: ['', Validators.compose([Validators.required])],
    });
  }

  signUp(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.userService.signUp(this.form.value).pipe(catchError(error => {
        throw Error(error);
      })).subscribe((res) => {
        this.router.navigate(['/dashboard']);
      }, error => {
        console.log(error);
      });
    }
  }
}
