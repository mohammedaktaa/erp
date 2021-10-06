import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {UserService} from '../../auth/services/user.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${localStorage.getItem('accessToken')}`);
    console.log(localStorage.getItem('accessToken'))
    const apiReq = request.clone({
      url: request.url.startsWith('http') ? request.url : `${environment.baseURL}${request.url}`,
      headers,
    });
    return next.handle(apiReq);
  }
}
