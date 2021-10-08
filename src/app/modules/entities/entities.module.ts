import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EntitiesRoutingModule} from './entities-routing.module';
import {EntitiesComponent} from './entities.component';
import {LayoutModule} from '../layout/layout.module';
import {FormComponent} from './containers/form/form.component';
import {ListComponent} from './containers/list/list.component';
import {ViewComponent} from './containers/view/view.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [EntitiesComponent, FormComponent, ListComponent, ViewComponent],
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    LayoutModule,
    FormsModule
  ]
})
export class EntitiesModule {
}
