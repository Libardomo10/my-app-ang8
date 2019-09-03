import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListComponent } from '../app/component/new-list/new-list.component';
import { InitComponent } from '../app/component/init/init.component';

const routes: Routes = [
  { path: 'nuevo', component: NewListComponent },
  { path: 'inicio', component: InitComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
