import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./services/guards/auth-guard.service";

const routes: Routes = [
    { path: '', 
      canActivate: [AuthGuardService],
      canActivateChild: [AuthGuardService]
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }