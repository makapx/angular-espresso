import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'submit',
    loadComponent: () =>
      import('./pages/submit/submit.component').then((m) => m.SubmitComponent),
  },
];
