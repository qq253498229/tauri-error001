import { Routes } from '@angular/router';
import { Welcome1Component } from './pages/welcome1/welcome1.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/welcome'},
  {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES)},
  {path: 'welcome1', component: Welcome1Component},
];
