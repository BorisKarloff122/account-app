import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './components/test/test.component';
import {AppCoreComponent} from './app-core.component';



const routes: Routes = [
  { path: 'app', component: AppCoreComponent, children: [
      {path: 'logged', component: TestComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCoreRoutingModule { }
