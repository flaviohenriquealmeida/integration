import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'fairwords',
    loadChildren: () => import('./fairwords/fairwords.module').then(m => m.FairwordsModule)
  },
  {
    path: '**',
    redirectTo: 'fairwords/feature1/page-a'
  }
];
