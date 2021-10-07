import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apis} from "../../core/enums/apis.enum";

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  constructor(private http: HttpClient) {
  }

  getEntityData(api): Observable<any> {
    return this.http.get(api);
  }
  getEntityRow(api): Observable<string> {
    return this.http.get<string>(api);
  }
}
