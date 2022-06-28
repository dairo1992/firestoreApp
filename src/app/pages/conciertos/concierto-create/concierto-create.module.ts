import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConciertoCreatePageRoutingModule } from './concierto-create-routing.module';

import { ConciertoCreatePage } from './concierto-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConciertoCreatePageRoutingModule
  ],
  declarations: [ConciertoCreatePage]
})
export class ConciertoCreatePageModule {}
