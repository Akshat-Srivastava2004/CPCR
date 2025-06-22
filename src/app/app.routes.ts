import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Register } from './Pages/register/register';
import { Login } from './Pages/login/login';
import { SubmitProject } from './Pages/submit-project/submit-project';
import { Projects } from './Pages/projects/projects';
import { Dashboard } from './Pages/dashboard/dashboard';
import { Students } from './Pages/students/students';
import { Competition } from './Pages/competition/competition';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:Home
    },
    {
        path:'register',
        component:Register
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'submitProject',
        component:SubmitProject
    },
    {
        path:'all-projects',
        component:Projects
    },
    {
        path:'dashboard',
        component:Dashboard
    },
    {
        path:'students',
        component:Students
    },
    {
        path:"competition",
        component:Competition
    }
];


