import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { Observable } from 'rxjs';
import {AuthService} from "../../auth/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard {

  constructor(private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean{

    return this.authService.token ? true : false
  }
}
