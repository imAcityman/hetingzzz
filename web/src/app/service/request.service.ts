import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../util/response';

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

  get(url: string, params?: any): Observable<Response> {
    return this.http.get<Response>(url, {params: params}).map(d => new Response(d));
  }

  post(url: string, params?: any): Observable<Response> {
    return this.http.post<Response>(url, null, {params: RequestService.buildHttpParam(params)}).map(d => new Response(d));
  }
}
