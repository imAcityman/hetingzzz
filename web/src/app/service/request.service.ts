import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../util/response';
import {map} from 'rxjs/operators';
import {isArray} from 'lodash';
import qs from 'qs';

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
      if (params[key] != null && params[key] !== undefined) {
        httpParams = httpParams.append(key, params[key]);
      }
    }
    return httpParams;
  }

  static transformRequest(data): string {
    let str = '';
    for (const i in data) {
      if (data.hasOwnProperty(i) && data[i] != null && data[i] !== undefined) {
        str += i + '=' + data[i] + '&';
      }
    }
    return str.substring(0, str.length - 1);
  }

  constructor(private http: HttpClient) {
  }

  get(url: string, params?: any): Observable<Response> {
    return this.http.get<Response>(url, {
      params: RequestService.buildHttpParam(params), headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8'
      }),
      withCredentials: true
    }).pipe(map(d => new Response(d)));
  }

  post(url: string, params?: any): Observable<Response> {
    let body = '';
    if (params) {
      for (const key of Object.keys(params)) {
        const param = params[key];
        if (isArray(param)) {
          params[key] = param.join(',');
        }
      }
      body = qs.stringify(params);
    }
    return this.http.post<Response>(url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      withCredentials: true
    }).pipe(map(d => new Response(d)));
  }
}
