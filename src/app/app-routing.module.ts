import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewProcessComponent } from './UI/addnew-process/addnew-process.component';
import { HomeComponent } from './UI/home/home.component';
import { ProcessComponent } from './UI/process/process.component';
import { UpdateProcessComponent } from './UI/update-process/update-process.component';

const routes: Routes = [
  
  {path : "" , redirectTo:"home" , pathMatch:"full"},
  {path : "process/:InvId/:procId" , component:ProcessComponent},
  {path : "addnewprocess" , component:AddnewProcessComponent},
  {path : "UpdateProcess/:InvId/:procId" , component:UpdateProcessComponent},
  {path : "home" , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
