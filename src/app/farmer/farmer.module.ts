import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerLoginComponent } from './component/farmer-login/farmer-login.component';
import { FarmerRegisterComponent } from './component/farmer-register/farmer-register.component';
import { FarmerDashboardComponent } from './component/farmer-dashboard/farmer-dashboard.component';
import { FarmerHeaderComponent } from './component/farmer-header/farmer-header.component';
import { FarmerMyAccountComponent } from './component/farmer-my-account/farmer-my-account.component';
import { FarmerAddProductComponent } from './component/farmer-dashboard/farmer-add-product/farmer-add-product.component';
import { FarmerBankDetailsComponent } from './component/farmer-dashboard/farmer-bank-details/farmer-bank-details.component';
import { FarmerCurrentOrderComponent } from './component/farmer-dashboard/farmer-current-order/farmer-current-order.component';
import { FarmerPreviousOrderComponent } from './component/farmer-dashboard/farmer-previous-order/farmer-previous-order.component';
import { FarmerViewProductComponent } from './component/farmer-dashboard/farmer-view-product/farmer-view-product.component';
import { FarmerComponent } from './farmer.component';




@NgModule({
  imports: [
    CommonModule,
    FarmerRoutingModule,
  ],

  declarations: [FarmerLoginComponent, FarmerRegisterComponent,FarmerDashboardComponent, FarmerHeaderComponent, FarmerMyAccountComponent, FarmerAddProductComponent, FarmerBankDetailsComponent, FarmerCurrentOrderComponent, FarmerPreviousOrderComponent, FarmerViewProductComponent, FarmerComponent],
})
export class FarmerModule { }
