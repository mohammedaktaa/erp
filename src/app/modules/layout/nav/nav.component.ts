import {Component, OnInit} from '@angular/core';
import {UserService} from '../../auth/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user = null;
  opened = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.user.asObservable().subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/auth/sign-in']);
  }

}
