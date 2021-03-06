import {Component, OnInit} from '@angular/core';
import {TABLES} from '../../../../tables.constants';
import {ActivatedRoute, Router} from '@angular/router';
import {EntitiesService} from '../../services/entities.service';
import {LeavesService} from '../../../dashboard/services/leaves.service';
import {isNumeric} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  item = [];
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
          this.entitiesService.getEntityRow(this.api.substr(0, this.api.length - 3) + 'get/' + this.id).subscribe(res => {
            this.item = Object.entries(res).map(([key, value]) => {
              // @ts-ignore
              return {key: this.getEnumValueLabel(key), value, isDate: false};
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
    if (action === 'accept') {
      this.leavesService.acceptLeave(this.id).subscribe(res => {
        this.message = res;
        this.isErrorRes = false;
        setTimeout(() => {
          this.message = '';
          this.router.navigate(['/entities/' + this.entity]);
        }, 2000);
      }, error => {
        this.message = error.message;
        this.isErrorRes = true;
        setTimeout(() => this.message = '', 5000);
      });
    } else {
      this.leavesService.rejectLeave(this.id).subscribe(res => {
        this.message = res;
        this.isErrorRes = false;
        setTimeout(() => {
          this.message = '';
          this.router.navigate(['/entities/' + this.entity]);
        }, 2000);
      }, error => {
        this.message = error.message;
        this.isErrorRes = true;
        setTimeout(() => this.message = '', 5000);
      });
    }
  }
}
