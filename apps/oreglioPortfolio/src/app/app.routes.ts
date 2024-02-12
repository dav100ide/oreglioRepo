import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadComponent: () => import('./src/pages/landing/landing.component').then((m) => m.LandingComponent),
    },
    {
        path: 'testPro',
        loadComponent: () => import('./src/pages/project/project.component').then((m) => m.ProjectComponent),
    },
];
