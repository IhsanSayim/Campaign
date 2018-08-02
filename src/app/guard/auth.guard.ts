import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from "../services/user-service/user.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService,
              private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("Auth Guard" + this.userService.getUserLoggedIn())
    if (!this.userService.getUserLoggedIn()) {
      this.router.navigate(['auth/login'])
      console.log('Deneme')
    }
    return this.userService.getUserLoggedIn()
  }
}
