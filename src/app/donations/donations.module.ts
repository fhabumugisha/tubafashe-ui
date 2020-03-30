import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DonationContainerComponent } from './donation-container/donation-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonationsRoutingModule } from './donations-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DonationContainerComponent],
  imports: [
    FormsModule,
  ReactiveFormsModule,
  DonationsRoutingModule,
  SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DonationsModule { }




