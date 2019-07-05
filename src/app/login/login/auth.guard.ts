

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthUtilService } from '../auth-util.service';
import { isNullOrUndefined } from 'util';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authUtil: AuthUtilService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!isNullOrUndefined(this.authUtil.currentTokenValue)) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }

    
}