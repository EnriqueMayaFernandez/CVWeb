import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ViewProyectComponent } from "./components/view-proyect/view-proyect.component";


const routes: Routes = [

  {
    path: "home",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "projects/:id",
    component: ViewProyectComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
