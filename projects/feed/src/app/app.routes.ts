import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren: () => import('./domains/posts/feature/posts.routes').then(m => m.POSTS_ROUTES)
    }
];
