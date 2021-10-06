import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {LayoutModule} from '../layout/layout.module';
import {ModulesListComponent} from './containers/modules-list/modules-list.component';
import {CreateAccountComponent} from './containers/create-account/create-account.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [DashboardComponent, ModulesListComponent, CreateAccountComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule {
}
