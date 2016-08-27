/**
 * Created by Michael on 27/08/2016.
 */

import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    canActivate() {
        console.log('AuthGuard#canActivate called');
        return true;
    }
}