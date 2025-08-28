import { Routes } from '@angular/router';

export const POSTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./post-shell.component').then(c => c.PostShell),
        title: 'Feeds'
    }
];
