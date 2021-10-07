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

  submitLeave(data): Observable<string> {
    return this.http.post<string>(Apis.SUBMIT_LEAVE, data);
  }

  rejectLeave(id): Observable<string> {
    return this.http.get<string>(Apis.REJECT_LEAVE + id);
  }

  acceptLeave(id): Observable<string> {
    return this.http.get<string>(Apis.ACCEPT_LEAVE + id);
  }


}
