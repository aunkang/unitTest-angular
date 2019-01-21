import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getGithubUserDetail(): Promise<any> {
    return this.http.get('https://api.github.com/users/aunkang').toPromise()

  }

  getGithubUserDetail2(): Observable<any> {
    return this.http.get('https://api.github.com/users/aunkang')

  }


}
