import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {
  }

  get(url: string, params: HttpParams): Observable<any> {
    return this.http.get(url, {params: params});
  }
  post(url: string, params: HttpParams): Observable<any> {
    return this.http.post(url, {params: params});
  }
}
