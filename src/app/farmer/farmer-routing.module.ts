import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerLoginComponent } from './component/farmer-login/farmer-login.component';
import { FarmerRegisterComponent } from './component/farmer-register/farmer-register.component';
import { FarmerDashboardComponent } from './component/farmer-dashboard/farmer-dashboard.component';
import { FarmerAddProductComponent } from './component/farmer-dashboard/farmer-add-product/farmer-add-product.component';
import { FarmerBankDetailsComponent } from './component/farmer-dashboard/farmer-bank-details/farmer-bank-details.component';
import { FarmerCurrentOrderComponent} from './component/farmer-dashboard/farmer-current-order/farmer-current-order.component';
import { FarmerPreviousOrderComponent } from './component/farmer-dashboard/farmer-previous-order/farmer-previous-order.component';
import { FarmerViewProductComponent} from './component/farmer-dashboard/farmer-view-product/farmer-view-product.component';
import { FarmerMyAccountComponent } from './component/farmer-my-account/farmer-my-account.component';


const routes: Routes = [
    { path:'farmer/login',component:FarmerLoginComponent },
    { path:'farmer/register',component:FarmerRegisterComponent },
    { path:'farmer/dashboard',component:FarmerDashboardComponent },
    { path:'farmer/addProduct',component:FarmerAddProductComponent },
    { path:'farmer/bankDetails',component:FarmerBankDetailsComponent },
    { path:'farmer/currentOrder',component:FarmerCurrentOrderComponent },
    { path:'farmer/previousOrder',component:FarmerPreviousOrderComponent },
    { path:'farmer/viewProduct',component:FarmerViewProductComponent },
    { path:'farmer/myAccount',component:FarmerMyAccountComponent },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports : [ RouterModule ],
})
export class FarmerRoutingModule { }
