import { DonationContainerComponent } from './donation-container/donation-container.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: DonationContainerComponent  },


];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class DonationsRoutingModule {}
