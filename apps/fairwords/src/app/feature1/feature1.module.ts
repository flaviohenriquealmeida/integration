import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { PageAComponent } from './page-a/page-a.component';
import { PageAModule } from './page-a/page-a.module';
import { PageBComponent } from './page-b/page-b.component';
import { PageBModule } from './page-b/page-b.module';

const routes: Route[] = [
  { path: 'page-a', component: PageAComponent },
  { path: 'page-b', component: PageBComponent }
]

@NgModule({
  imports: [
    PageAModule,
    PageBModule,
    RouterModule.forChild(routes)
  ]
})
export class Feture1Module {}
