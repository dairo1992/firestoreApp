import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConciertoCreatePage } from './concierto-create.page';

const routes: Routes = [
  {
    path: '',
    component: ConciertoCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConciertoCreatePageRoutingModule {}
