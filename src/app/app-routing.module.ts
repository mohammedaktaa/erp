import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuestGuard} from './modules/core/gurds/guest.guard';
import {AuthenticatedUserResolver} from './modules/core/resolvers/authenticated-user.resolver';
import {AuthGuard} from "./modules/core/gurds/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/list',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    canActivate: [GuestGuard],
    data: {animationState: 'AUTH'}
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    resolve: {user: AuthenticatedUserResolver},
    // canActivate: [AuthGuard],
    data: {animationState: 'DASHBOARD'}
  },
  {
    path: 'entities',
    loadChildren: () => import('./modules/entities/entities.module').then(m => m.EntitiesModule),
    resolve: {user: AuthenticatedUserResolver},
    // canActivate: [AuthGuard],
    data: {animationState: 'ENTITIES'}
  },

  {
    path: '**',
    redirectTo: 'auth/sign-in'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
