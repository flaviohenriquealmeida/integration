import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { FairwordsComponent } from './fairwords.component';
import { IFrameModule } from '../shared/directives/iframe.module';

const routes: Route[] = [
  { path: 'feature1/page-a', component: FairwordsComponent },
  { path: 'feature1/page-b', component: FairwordsComponent },
  { path: 'feature1/page-c', component: FairwordsComponent }
]
@NgModule({
  declarations: [FairwordsComponent],
  exports: [FairwordsComponent],
  imports: [
    CommonModule,
    IFrameModule,
    RouterModule.forChild(routes)
  ]
})
export class FairwordsModule {}
