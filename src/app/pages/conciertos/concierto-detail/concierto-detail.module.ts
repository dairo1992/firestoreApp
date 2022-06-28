import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConciertoDetailPageRoutingModule } from './concierto-detail-routing.module';

import { ConciertoDetailPage } from './concierto-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConciertoDetailPageRoutingModule
  ],
  declarations: [ConciertoDetailPage]
})
export class ConciertoDetailPageModule {}
