import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apis} from '../../core/enums/apis.enum';

export interface LeaveType {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private http: HttpClient) {
  }

  getLeaveTypes(): Observable<LeaveType[]> {
    return this.http.get<LeaveType[]>(Apis.LEAVE_TYPES);
  }

  submitLeave(data): Observable<any> {
    return this.http.post(Apis.SUBMIT_LEAVE, data);
  }

  rejectLeave(id): Observable<any> {
    return this.http.get(Apis.REJECT_LEAVE + id);
  }

  acceptLeave(id): Observable<any> {
    return this.http.get(Apis.ACCEPT_LEAVE + id);
  }


}
