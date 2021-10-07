import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TABLES} from '../../../../tables.constants';
import {EntitiesService} from '../../services/entities.service';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  fetching = false;
  columns = [];
  rowActions = [];
  data = [
    {
      id: 1,
      submit_date: '2021-09-29T19:31:01.000+00:00',
      start_date: '2020-01-05T00:00:00.000+00:00',
      end_date: '2020-01-07T00:00:00.000+00:00',
      employee_name: 'Motaz',
      approval: 'hr_manager',
      type: 'study'
    },
    {
      id: 7,
      submit_date: '2020-01-01T00:00:00.000+00:00',
      start_date: '2020-01-05T00:00:00.000+00:00',
      end_date: '2020-01-07T00:00:00.000+00:00',
      employee_name: 'Motaz',
      approval: 'hr_manager',
      type: 'sick'
    }
  ];
  tables = TABLES;
  entity = '';
  title = '';
  message = '';
  private api = '';

  constructor(private route: ActivatedRoute, private entitiesService: EntitiesService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('entity')) {
        this.entity = params.get('entity');
        if ([...this.tables].find(_ => _.slug === params.get('entity'))) {
          const table = [...this.tables].find(_ => _.slug === params.get('entity'));
          this.columns = table.columns;
          // @ts-ignore
          this.rowActions = table.rowActions ? table.rowActions.map(_ => {
            _.link = _.link.replace(':entity', params.get('entity'));
            return _;
          }) : [];
          this.api = table.api;
          this.title = table.title;
          this.getData();
        } else {
          this.message = 'There is no entity with this name';
          setTimeout(() => this.message = '', 5000);
        }
      }
    });
  }

  getData(): void {
    this.fetching = true;
    this.entitiesService.getEntityData(this.api).pipe(catchError(err => {
      this.fetching = false;
      this.message = err.message;
      setTimeout(() => this.message = '', 5000);
      throw Error(err.message);
    })).subscribe(res => {
      this.message = '';
      this.data = res;
      this.data.sort((a, b) => {
        return a.id - b.id;
      });
      this.fetching = false;
    });
  }

}
