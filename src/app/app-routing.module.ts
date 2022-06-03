import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { EmploymentComponent } from './employment/employment.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  {path: '', component:AboutMeComponent},
  {path: 'about-me', component:AboutMeComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'employment', component:EmploymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
