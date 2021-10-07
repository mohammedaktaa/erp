import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../auth/services/user.service';
import {LeavesService, LeaveType} from '../../services/leaves.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user = {
    id: 8,
    user_name: 'Motaz',
    firstName: 'Motaz',
    middleName: 'Naser',
    lastName: 'Shwaike',
    dateOfBirth: '1998-01-03T00:00:00.000+00:00',
    email: 'motaz@hotmail.com',
    joiningDate: '2021-05-06T00:00:00.000+00:00',
    exitDate: '2023-01-03T00:00:00.000+00:00',
    address: 'Kafarsoseh',
    contact: '0965874548',
    department: 'Project Management',
    designation: 'hr_employee',
    grade: 'third',
    month_salaryList: [
      {
        id: 86,
        year: '2021',
        month: '01',
        amount: 28.0,
        employee_name: 'Motaz'
      }
    ],
    leavesList: [
      {
        id: 1,
        submit_date: '2021-09-29T19:31:01.000+00:00',
        start_date: '2020-01-05T00:00:00.000+00:00',
        end_date: '2020-01-07T00:00:00.000+00:00',
        employee_name: null,
        type: 'study'
      },
      {
        id: 7,
        submit_date: '2020-01-01T00:00:00.000+00:00',
        start_date: '2020-01-05T00:00:00.000+00:00',
        end_date: '2020-01-07T00:00:00.000+00:00',
        employee_name: null,
        type: 'sick'
      }
    ],
    active: true
  };
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
      this.leavesService.submitLeave().subscribe(res => {
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
      }, error => {
        this.message = error.message;
        this.isErrorRes = true;
      });
    }
  }

}
