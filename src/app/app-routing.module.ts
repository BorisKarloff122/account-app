import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {LoginGuard} from './shared/guards/login.guard';

const routes: Routes = [

  { path: 'logged', canActivate: [LoginGuard], loadChildren: () => import('./app-core/app-core.module')
      .then(m => m.AppCoreModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
