import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'fairwords',
    loadChildren: () => import('apps/mco/src/app/fairwords/fairwords.module').then(m => m.FairwordsModule)
  }
];
