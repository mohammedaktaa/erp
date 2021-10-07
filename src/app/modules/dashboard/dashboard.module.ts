import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {LayoutModule} from '../layout/layout.module';
import {ModulesListComponent} from './containers/modules-list/modules-list.component';
import {CreateAccountComponent} from './containers/create-account/create-account.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from './containers/profile/profile.component';


@NgModule({
  declarations: [DashboardComponent, ModulesListComponent, CreateAccountComponent, ProfileComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule {
}
