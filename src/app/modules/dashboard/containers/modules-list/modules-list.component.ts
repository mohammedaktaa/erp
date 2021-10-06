import {Component, OnInit} from '@angular/core';
import {MODULES} from '../../../../modules.constants';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.scss']
})
export class ModulesListComponent implements OnInit {
  modules = MODULES;
  isSubModule = false;
  currentModule = null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.isSubModule = params.has('module');
      if (this.isSubModule) {
        this.currentModule = this.modules.find(_ => _.slug === params.get('module'));
      }
    });
  }

}
