import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
  path: 'feature1',
  loadChildren: () => import('apps/fairwords/src/app/feature1/feature1.module').then(m => m.Feture1Module)
}];
