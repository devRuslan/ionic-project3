import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',     loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'inside',    loadChildren: './pages/inside/inside.module#InsidePageModule',       canActivate: [AuthGuardService] },
  { path: 'groups',    loadChildren: './pages/groups/groups.module#GroupsPageModule',       canActivate: [AuthGuardService] },
  { path: 'schedule',  loadChildren: './pages/schedule/schedule.module#SchedulePageModule', canActivate: [AuthGuardService] },
  { path: 'group/:id', loadChildren: './pages/group/group.module#GroupPageModule',          canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
