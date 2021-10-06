import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {UserService} from '../../auth/services/user.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.startsWith('http')) {
      request = request.clone({
        url: `${environment.baseURL}${request.url}`,
        setHeaders: {
          Authorization: 'Bearer ' + this.userService.getToken(),
        }
      });
    }
    return next.handle(request);
  }
}
