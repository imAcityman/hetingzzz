import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError, TimeoutError} from 'rxjs';
import 'rxjs-compat/add/operator/map';
import {Router} from '@angular/router';
import {MyStorageService} from './my.storage.service';
import {environment} from '../../environments/environment';
import {LoadingService} from '../component/loading/loading.service';
import {catchError, mergeMap, timeout} from 'rxjs/operators';

@Injectable()
export class Interceptor implements HttpInterceptor {

  private backend = environment.apiHost;

  constructor(private router: Router, private storage: MyStorageService) {
  }

  private handleData(
    event: (HttpResponse<any> | HttpErrorResponse) | TimeoutError,
  ): Observable<any> {
    if (event instanceof TimeoutError) {
      LoadingService.close();
      alert('请求超时咯~');
      return of('请求超时咯~');
    }
    // 业务处理：一些通用操作
    switch (event.status) {
      case 200:
        if (event instanceof HttpResponse) {
          return of(event);
        }
        break;
      case 401: // 未登录状态码
        LoadingService.close();
        alert('登录超时，请重新登录');
        this.router.navigate(['login']);
        break;
      case 404:
        LoadingService.close();
        alert('资源没找到哟~');
        return throwError('服务器去体检了~');
      case 500:
        LoadingService.close();
        alert('服务器开小差了~');
        return throwError('服务器去体检了~');
      case 504:
        LoadingService.close();
        alert('服务器去体检了~');
        return throwError('服务器去体检了~');
      default:
        return of(event);
    }
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<| HttpHeaderResponse | HttpResponse<any>> {
    const authorization = this.storage.get('authorization');
    const authReq = req.clone({
      headers: req.headers
        .set('Authorization', authorization)
        .set('Content-Type', 'application/json;charset=UTF-8')
      , url: this.backend + req.url
    });
    return next.handle(authReq)
      .pipe(mergeMap((event: any) => {
        if (event instanceof HttpResponse && event.status === 200) {
          return this.handleData(event);
        }
        return of(event);
      }), timeout(30000), catchError((err: HttpErrorResponse & TimeoutError) => this.handleData(err)));

  }

}
