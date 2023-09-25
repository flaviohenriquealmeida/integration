import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
  path: 'feature1',
  loadChildren: () => import('./feature1/feature1.module').then(m => m.Feture1Module)
}];
