import { Routes } from '@angular/router';
import { Error404Component } from '../shared/common/error/error404/error404.component';

export const Container: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'   
    },
    {
        path: 'home',
         loadComponent: () => import('../pages/home/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('../pages/about/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'courses',
        loadComponent: () => import('../pages/courses/courses/courses.component').then(m => m.CoursesComponent)
    },
    {
        path: 'blogs',
        loadComponent: () => import('../pages/blogs/blogs/blogs.component').then(m => m.BlogsComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('../pages/contact/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path:'placements',
        loadComponent: () => import('../pages/placement/placement/placement.component').then(m => m.PlacementComponent)
    },
    {
        path: '**',
        component: Error404Component
    }
]

