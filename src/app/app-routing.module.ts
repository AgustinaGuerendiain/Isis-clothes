import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsisClothingComponent } from './isis-clothing/isis-clothing.component';
import { IsisContactoComponent } from './isis-contacto/isis-contacto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clothing',
    pathMatch: 'full'
  },
  {
    path: 'clothing',
    component: IsisClothingComponent,
  },
  {
    path: 'contacto',
    component: IsisContactoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
