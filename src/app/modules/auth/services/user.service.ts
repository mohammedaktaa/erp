import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Apis} from '../../core/enums/apis.enum';

interface UserResponse {
  id: number;
  username: string;
  email: string;
  tenantId: string;
  roles: [];
  accessToken: string;
}

interface MessageResponse {
  message: string;
}

interface Role {
  id: number;
  name: string;
}

export interface EmployeeProfile {
  id: number;
  user_name: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  joiningDate: string;
  exitDate: string;
  address: string;
  contact: string;
  department: string;
  designation: string;
  grade: string;
  month_salaryList: [];
  leavesList: [];
  active: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = new BehaviorSubject({} as UserResponse);

  constructor(private http: HttpClient) {
  }

  signIn(username: string, password: string): Observable<UserResponse> {
    return this.http.post<UserResponse>(Apis.SIGN_IN, {username, password});
  }

  signUp(data): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(Apis.SIGN_UP, data);
  }

  authenticatedUser(): Observable<UserResponse> {
    return this.http.get<UserResponse>(Apis.AUTH_USER);
  }

  employeeProfile(username: string): Observable<EmployeeProfile> {
    return this.http.get<EmployeeProfile>(Apis.EMPLOYEE_PROFILE + username);
  }

  roles(): Observable<Role> {
    return this.http.get<Role>(Apis.ROLES);
  }

  getToken(): string | undefined {
    return localStorage.getItem('accessToken');
  }

  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  logout(): void {
    localStorage.removeItem('accessToken');
  }
}
