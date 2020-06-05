import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

declare var Object: any;

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  static buildHttpParam(params: any): HttpParams {
    if (!params) {
      return null;
    }
    let httpParams = new HttpParams();
    for (const key of Object.keys(params)) {
      httpParams = httpParams.append(key, params[key]);
    }
    return httpParams;
  }

  constructor(private http: HttpClient) {
  }

  get(url: string, params?: any): Observable<any> {
    return this.http.get(url, {params: params});
  }

  post(url: string, params?: any): Observable<any> {
    return this.http.post(url, null, {params: RequestService.buildHttpParam(params)});
  }
}
