import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './helpers';
import { EditComponent } from './todo/edit';
import { AddComponent } from './todo/add';
import { ListComponent } from './todo/list';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
    { path: 'add', component: AddComponent, canActivate: [AuthGuard] },
    { path: 'edit', component: EditComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);