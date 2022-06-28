import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConciertoListPageRoutingModule } from './concierto-list-routing.module';

import { ConciertoListPage } from './concierto-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConciertoListPageRoutingModule
  ],
  declarations: [ConciertoListPage]
})
export class ConciertoListPageModule {}
