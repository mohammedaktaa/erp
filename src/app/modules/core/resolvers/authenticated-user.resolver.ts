import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserService} from '../../auth/services/user.service';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUserResolver implements Resolve<boolean> {
  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.authenticatedUser().pipe(map((user): any => {
      this.userService.user = user;
      return of(true);
    }), catchError((error: any) => {
      this.userService.user = null;
      return of(true);
    }));
  }
}
