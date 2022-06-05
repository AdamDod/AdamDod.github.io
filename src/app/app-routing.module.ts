import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { EmploymentComponent } from './employment/employment.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'about-me', component:AboutMeComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'employment', component:EmploymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
