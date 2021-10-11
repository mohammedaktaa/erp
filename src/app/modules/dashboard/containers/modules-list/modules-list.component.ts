import {Component, OnInit} from '@angular/core';
import {MODULES} from '../../../../modules.constants';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../auth/services/user.service';

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.scss']
})
export class ModulesListComponent implements OnInit {
  modules = [...MODULES];
  isSubModule = false;
  currentModule = null;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    // this.userService.user.next({
    //   id: 6,
    //   username: 'Ahmad',
    //   email: 'ahmad@hotmail.com',
    //   roles: [{id: 4, name: 'ROLE_GEN_MAN'}]
    // });
    this.userService.user.asObservable().subscribe(user => {
      if (user) {
        // @ts-ignore
        const roles = user.roles.length ? user.roles.map(_ => _.name.replace('ROLE_', '').toLowerCase()) : [];
        roles.forEach(role => {
          this.modules = this.modules.filter(_ => _[role]);
        });
        this.route.paramMap.subscribe((params) => {
          this.isSubModule = params.has('module');
          if (this.isSubModule) {
            this.currentModule = this.modules.find(_ => _.slug === params.get('module'));
            if (!this.currentModule) {
              alert('module not found');
            }
          }
        });
      }
    });
  }

}
