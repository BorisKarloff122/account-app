import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';
import {AuthFormComponent} from './components/auth-form/auth-form.component';
import {RegFormComponent} from './components/reg-form/reg-form.component';

const routes: Routes = [
  { path: '', component: AuthComponent, children: [
      { path: 'auth', component: AuthFormComponent},
      { path: 'reg', component: RegFormComponent},
    ]},
  { path: 'logged',
    loadChildren:
      () => import('../app-core/app-core.module')
      .then(m => m.AppCoreModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
