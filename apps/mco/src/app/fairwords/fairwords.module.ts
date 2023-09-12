import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { FairwordsComponent } from './fairwords.component';
import { IFrameModule } from '../shared/directives/iframe.module';

const routes: Route[] = [
  { path: 'page1', component: FairwordsComponent },
  { path: 'page2', component: FairwordsComponent },
  { path: 'page3', component: FairwordsComponent }
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
