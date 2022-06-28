import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConciertoListPage } from './concierto-list.page';

const routes: Routes = [
  {
    path: '',
    component: ConciertoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConciertoListPageRoutingModule {}
