import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
  },  {
    path: 'images',
    loadChildren: () => import('./pages/images/images.module').then( m => m.ImagesPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
