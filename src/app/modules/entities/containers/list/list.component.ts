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
  data = [];
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
