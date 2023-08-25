import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';

const routes: Routes = [
  { path: 'first-component', component: NewcomponentComponent },
  { path: 'secondc-omponent', component: SecondcomponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
