import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { ListusersComponent } from './listusers/listusers.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"signin", component:SigninComponent},
  {path:"listusers", component:ListusersComponent},
  {path:"updateuser/:id", component:UpdateuserComponent},
  {path:"signup", component:SingupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
