import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../services/user.service";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
  }

  get controls(): { [key in 'username' | 'password' | string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  signIn(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const {username, password} = this.controls;
      this.userService.signIn(username.value, password.value).pipe(catchError(error => {
        throw Error(error);
      })).subscribe((res) => {
        this.router.navigate(['/dashboard/list'], {
          replaceUrl: true,
          skipLocationChange: true
        }).then(() => this.userService.setToken(res.accessToken));
      }, error => {
        console.log(error);
      });
    }
  }
}
