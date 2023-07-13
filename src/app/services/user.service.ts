import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {
  }

  public login(user: User): Observable<any> {
    const email = user.email;
    const password = user.password;
    const postBody = { email, password, personal_data_access: true };
    return this.http.post('https://core.nekta.cloud/api/auth/login', postBody);
  }
}