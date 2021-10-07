import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {GuestGuard} from './modules/core/gurds/guest.guard';
import {AuthenticatedUserResolver} from './modules/core/resolvers/authenticated-user.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/sign-in',
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
    data: {animationState: 'DASHBOARD'}
  },
  {
    path: 'entities',
    loadChildren: () => import('./modules/entities/entities.module').then(m => m.EntitiesModule),
    resolve: {user: AuthenticatedUserResolver},
    data: {animationState: 'ENTITIES'}
  },

  // {
  //   path: '**',
  //   redirectTo: 'auth/sign-in'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // initialNavigation: 'enabled',
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
