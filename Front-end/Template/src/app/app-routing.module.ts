import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'index',component: IndexComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
