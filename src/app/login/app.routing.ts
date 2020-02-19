import { LoginComponent } from "./login.component";
import { CadastroComponent } from '../cadastro/cadastro.component';
import { HomeComponent } from '../home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {path:'cadastro', component: CadastroComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);