import { Routes } from '@angular/router';
import { HomeHomeComponent } from './home-home/home-home.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';

export const routes: Routes = [
    {path:'home', component: HomeHomeComponent},
    {path: 'contact', component: ContactHomeComponent},
];
