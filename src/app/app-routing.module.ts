import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  RoleGuardService as AuthGuard
} from './service/role-guard.service';
import {LoginComponent} from "./security/login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {ProductComponent} from "./component/product/product.component";
import {NotfoundComponent} from "./component/notfound/notfound.component";

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
    ,
    data:{
      roles:["ROLE_ADMIN"]
    }
  },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthGuard],
    data:{
      roles:["ROLE_ADMIN"]
    }
  },
  { path: '**', component: NotfoundComponent },
  // { path: '',pathMatch: 'full', redirectTo: 'product' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
