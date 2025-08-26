import { Routes } from '@angular/router';
import { Container } from './pages/container.route';
import { ContentComponent } from './pages/content/content/content.component';
import { Error404Component } from './shared/common/error/error404/error404.component';

export const routes: Routes = [
    //    {
    //     path: '',
    //     redirectTo: 'content',
    //     pathMatch: 'full'
    //   },
      {
        path: '',
        component: ContentComponent,
        // canActivate: [loginGuard],
        // canDeactivate: [loginDisableNavigationGuard],
        // resolve: { appInit: appInitResolver },
        children: [...Container]
      },
      {
        path: '**',
        component: Error404Component,
      },
];
