import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConciertoDetailPage } from './concierto-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ConciertoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConciertoDetailPageRoutingModule {}
