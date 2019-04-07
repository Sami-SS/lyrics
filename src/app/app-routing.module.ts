import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: './pages/home', pathMatch: 'full' },
  { path: 'register', loadChildren: './Pages/register/register.module#registerModule' },
  { path: 'home', loadChildren: './Pages/home/home.module#homeModule' },
  { path: 'login', loadChildren: './Pages/login/login.module#loginModule' },
  { path: 'invite', loadChildren: './Pages/invite/invite.module#inviteModule' },
  { path: 'view-song', loadChildren: './Pages/view-song/view-song.module#viewsongModule' },
  { path: 'edit-song', loadChildren: './Pages/edit-song/edit-song.module#editsongModule' },
  { path: 'add-song', loadChildren: './Pages/add-song/add-song.module#addsongModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
