import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpresasPage } from './empresas.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EmpresasPageRoutingModule } from './empresas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EmpresasPageRoutingModule
  ],
  declarations: [EmpresasPage]
})
export class EmpresasPageModule {}
