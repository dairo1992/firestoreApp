import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'create-song',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'song-detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'update-song',
    loadChildren: () => import('./pages/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'cantantes',
    loadChildren: () => import('./pages/cantantes/cantantes.module').then( m => m.CantantesPageModule)
  },
  {
    path: 'create-recording',
    loadChildren: () => import('./pages/recording/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'recording-detail/:id',
    loadChildren: () => import('./pages/recording/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'update-recording',
    loadChildren: () => import('./pages/recording/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'recording-list',
    loadChildren: () => import('./pages/recording/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'song-list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'images',
    loadChildren: () => import('./pages/images/images.module').then( m => m.ImagesPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recovery',
    loadChildren: () => import('./pages/recovery/recovery.module').then( m => m.RecoveryPageModule)
  },
  {
    path: 'concierto-create',
    loadChildren: () => import('./pages/conciertos/concierto-create/concierto-create.module').then( m => m.ConciertoCreatePageModule)
  },
  {
    path: 'concierto-detail/:id',
    loadChildren: () => import('./pages/conciertos/concierto-detail/concierto-detail.module').then( m => m.ConciertoDetailPageModule)
  },
  {
    path: 'concierto-list',
    loadChildren: () => import('./pages/conciertos/concierto-list/concierto-list.module').then( m => m.ConciertoListPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
