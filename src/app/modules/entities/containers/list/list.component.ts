import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TABLES} from '../../../../tables.constants';
import {EntitiesService} from '../../services/entities.service';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  fetching = false;
  columns = [];
  additionButtons = [];
  rowActions = [];
  data = [];
  tables = TABLES;
  entity = '';
  opened = false;
  isSubmitted = false;
  title = '';
  message = '';
  apiButton = '';
  form = {
    year: '',
    month: ''
  };
  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  today = new Date();
  isErrorRes = false;
  private api = '';

  constructor(private route: ActivatedRoute, private entitiesService: EntitiesService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('entity')) {
        this.entity = params.get('entity');
        if ([...this.tables].find(_ => _.slug === params.get('entity'))) {
          const table = [...this.tables].find(_ => _.slug === params.get('entity'));
          this.columns = table.columns;
          this.additionButtons = table.additionButtons ? table.additionButtons : [];
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
      this.isErrorRes = true;
      setTimeout(() => this.message = '', 5000);
      throw Error(err.message);
    })).subscribe(res => {
      this.isErrorRes = false;
      this.message = '';
      this.data = res;
      this.data.sort((a, b) => {
        return a.id - b.id;
      });
      this.fetching = false;
    });
  }

  takeAction(): void {
    this.isSubmitted = true;
    if (Object.values(this.form).every(_ => !!_)) {
      this.http.post(this.apiButton, this.form, {responseType: 'text'}).pipe(catchError(error => {
        throw Error(error);
      })).subscribe((res: string) => {
        this.form = {
          year: '',
          month: ''
        };
        this.isErrorRes = false;
        this.opened = false;
        this.message = res;
        this.getData();
        this.isSubmitted = false;
        setTimeout(() => this.message = '', 7000);
      }, error => {
        this.message = error.message;
        this.isSubmitted = false;
        this.isErrorRes = true;
        setTimeout(() => this.message = '', 5000);
      });
    }
  }

  openModalAndSetApi(api): void {
    this.apiButton = api;
    this.opened = true;
  }

  range(start: number, end?: number): number[] {
    if (!end) {
      return [start];
    }
    const data: number[] = [];
    for (let i = start; i <= end; i++) {
      data.push(i);
    }
    return data;
  }

}
