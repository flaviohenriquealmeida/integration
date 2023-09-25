import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { FairwordsComponent } from './fairwords.component';
import { IFrameModule } from '../shared/directives/iframe.module';
import { FairwordsService } from './services/fairwords.service';
import { fairwordsResolver } from './resolvers/fairwords.resolver';

const routes: Route[] = [
  {
    path: '**',
    component: FairwordsComponent,
    resolve: { integrationData: fairwordsResolver }
  },
]
@NgModule({
  declarations: [FairwordsComponent],
  exports: [FairwordsComponent],
  imports: [
    CommonModule,
    IFrameModule,
    RouterModule.forChild(routes)
  ],
  providers: [FairwordsService]
})
export class FairwordsModule {}
