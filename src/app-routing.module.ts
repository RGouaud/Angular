import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ListeCDsComponent } from './app/liste-cds/liste-cds.component';
import { CdComponent } from './app/cd/cd.component'
import { FormCDComponent } from './app/form-cd/form-cd.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: ListeCDsComponent},
  {path: 'cd/:id', component : CdComponent},
  {path: 'formCd', component: FormCDComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
