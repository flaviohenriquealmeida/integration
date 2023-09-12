import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { PageAComponent } from './page-a/page-a.component';
import { PageAModule } from './page-a/page-a.module';

const routes: Route[] = [{
  path: 'page-a', component: PageAComponent
}]

@NgModule({
  imports: [
    PageAModule,
    RouterModule.forChild(routes)
  ]
})
export class Feture1Module {}
