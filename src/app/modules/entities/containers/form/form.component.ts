import {Component, OnInit} from '@angular/core';
import {TABLES} from "../../../../tables.constants";
import {ActivatedRoute, Router} from "@angular/router";
import {EntitiesService} from "../../services/entities.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  columns = [];
  tables = TABLES;
  entity = '';
  title = '';
  id = '';
  private api = '';

  constructor(private route: ActivatedRoute, private entitiesService: EntitiesService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.entity = this.router.url.split('/')[2];
      if ([...this.tables].find(_ => _.slug === this.entity)) {
        this.columns = [...this.tables].find(_ => _.slug === this.entity).columns.filter(_ => !_.except);
        this.api = [...this.tables].find(_ => _.slug === this.entity).api;
        this.title = [...this.tables].find(_ => _.slug === this.entity).title;
        // this.getData();
      }
    });
  }
}
