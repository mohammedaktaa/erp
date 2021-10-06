import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntitiesComponent} from './entities.component';
import {FormComponent} from './containers/form/form.component';
import {ListComponent} from './containers/list/list.component';

const routes: Routes = [
  {
    path: ':entity',
    component: EntitiesComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        data: {animationState: 'ENTITIES_LIST'}
      },
      {
        path: 'add',
        component: FormComponent,
        data: {animationState: 'ENTITIES_ADD'}
      },
      {
        path: 'edit/:id',
        component: FormComponent,
        data: {animationState: 'ENTITIES_EDIT'}
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule {
}
