import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ModulesListComponent} from './containers/modules-list/modules-list.component';
import {CreateAccountComponent} from './containers/create-account/create-account.component';
import {AuthGuard} from '../core/gurds/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'create-account',
        component: CreateAccountComponent
      },
      {
        path: 'list',
        component: ModulesListComponent
      },
      {
        path: 'modules/:module',
        component: ModulesListComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/sign-in'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
