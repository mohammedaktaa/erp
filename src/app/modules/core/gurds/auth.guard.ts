import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {UserService} from '../../auth/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!localStorage.getItem('accessToken')) {
      this.router.navigateByUrl('/auth/sign-in');
      return of(false);
    }
    return this.userService.authenticatedUser().pipe(map((user): any => {
      console.log(user);
      return of(true);
    }), catchError((error: any) => {
      this.router.navigateByUrl('/auth/sign-in');
      return of(false);
    }));
  }

}
