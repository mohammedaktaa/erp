import {Component, OnInit} from '@angular/core';
import {TABLES} from '../../../../tables.constants';
import {ActivatedRoute, Router} from '@angular/router';
import {EntitiesService} from '../../services/entities.service';
import {LeavesService} from '../../../dashboard/services/leaves.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  i = {
    id: 20,
    submit_date: null,
    approval_date: null,
    start_date: '2020-01-05T00:00:00.000+00:00',
    end_date: '2020-01-07T00:00:00.000+00:00',
    approval: 'hr_manager',
    type: 'travel',
    status: 'Pending',
    employee: 7
  };
  item = Object.entries(this.i).map(([key, value]) => {
    return {key: this.getEnumValueLabel(key), value, isDate: Date.parse(value)};
  });
  columns = [];
  rowActions = [];
  tables = TABLES;
  entity = '';
  title = '';
  id = '';
  message = '';
  isErrorRes = false;
  private api = '';

  constructor(private route: ActivatedRoute, private entitiesService: EntitiesService,
              private leavesService: LeavesService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.entity = this.router.url.split('/')[2];

      const table = [...this.tables].find(_ => _.slug === this.entity);
      if (table) {
        this.columns = table.columns.filter(_ => !_.except);
        this.api = table.api;
        this.title = this.entity[this.entity.length - 1] === 's' ? this.entity.slice(0, -1) : this.entity;
        this.rowActions = table.rowActions ? table.rowActions.map(_ => {
          _.link = _.link.replace(':entity', params.get('entity'));
          return _;
        }) : [];
        if (this.id) {
          this.entitiesService.getEntityRow(this.api.substr(0, this.api.length - 3) + '/get/' + this.id).subscribe(res => {
            this.item = Object.entries(res).map(([key, value]) => {
              return {key: this.getEnumValueLabel(key), value, isDate: Date.parse(value)};
            });
          });
        }
        // this.getData();
      }
    });
  }

  getEnumValueLabel(value): string {
    if (!value) {
      return value;
    }
    return value.toLowerCase().replace(/_/g, ' ').replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  takeAction(action): void {
    console.log(this.leavesService)
    if (action === 'accept') {
      this.leavesService.acceptLeave(this.id).subscribe(res => {
        this.message = res;
        this.isErrorRes = false;
        setTimeout(() => this.message = '', 5000);
        this.router.navigate(['/entities/' + this.entity]);
      }, error => {
        this.message = error.message;
        this.isErrorRes = true;
        setTimeout(() => this.message = '', 5000);
      });
    } else {
      this.leavesService.rejectLeave(this.id).subscribe(res => {
        this.message = res;
        this.isErrorRes = false;
        setTimeout(() => this.message = '', 5000);
        this.router.navigate(['/entities/' + this.entity]);
      }, error => {
        this.message = error.message;
        this.isErrorRes = true;
        setTimeout(() => this.message = '', 5000);
      });
    }
  }
}
