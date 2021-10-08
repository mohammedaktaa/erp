import {Component, OnInit} from '@angular/core';
import {EmployeeProfile, UserService} from '../../../auth/services/user.service';
import {LeavesService, LeaveType} from '../../services/leaves.service';
import {formatDate} from '@angular/common';
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user = {} as EmployeeProfile;
  opened = false;
  message = '';
  isErrorRes = false;
  leaveTypes: LeaveType[];
  form = {
    start_date: '',
    end_date: '',
    type: '',
  };
  isSubmitted = false;

  constructor(private userService: UserService, private leavesService: LeavesService) {
  }

  ngOnInit(): void {
    this.leavesService.getLeaveTypes().subscribe(data => {
      this.leaveTypes = data;
    });
    this.getProfile();
  }

  getProfile(): void {
    this.userService.user.asObservable().subscribe(user => {
      if (user) {
        this.userService.employeeProfile(user.username).subscribe(res => {
          this.user = res;
        });
      }
    });
  }

  submitLeave(): void {
    this.isSubmitted = true;
    if (this.form.type && this.form.end_date && this.form.start_date) {
      this.leavesService.submitLeave({
        ...this.form,
        username: this.user.user_name,
        submit_date: formatDate(new Date(), 'y-MM-dd', 'en-US')
      }).pipe(catchError(error => {
        throw Error(error);
      })).subscribe(res => {
        console.log(res);
        this.isSubmitted = false;
        this.form = {
          start_date: '',
          end_date: '',
          type: '',
        };
        this.opened = false;
        this.message = res;
        this.isErrorRes = false;
        this.getProfile();
        setTimeout(() => this.message = '', 5000);
      }, error => {
        console.log({error});
        this.message = error.message;
        this.isErrorRes = true;
        setTimeout(() => this.message = '', 5000);
      });
    }
  }

}
