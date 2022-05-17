import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CantantesPageRoutingModule } from './cantantes-routing.module';

import { CantantesPage } from './cantantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CantantesPageRoutingModule
  ],
  declarations: [CantantesPage]
})
export class CantantesPageModule {}
