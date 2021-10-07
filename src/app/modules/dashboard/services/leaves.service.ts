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

  submitLeave(): Observable<string> {
    return this.http.get<string>(Apis.SUBMIT_LEAVE);
  }
}
