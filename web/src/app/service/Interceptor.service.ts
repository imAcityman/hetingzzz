import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable, of, TimeoutError} from 'rxjs';
import 'rxjs-compat/add/operator/map';
import {Router} from '@angular/router';
import {MyStorageService} from './my.storage.service';
import {catchError, mergeMap, timeout} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs-compat/observable/ErrorObservable';
import {environment} from '../../environments/environment';
import {CommonparamService} from '../util/commonparam.service';
import {ToastService} from 'ng-zorro-antd-mobile';

@Injectable()
export class Interceptor implements HttpInterceptor {

  private backend = environment.apiHost;

  constructor(private router: Router, private storage: MyStorageService,private toast: ToastService) {
  }

  private handleData(
    event: (HttpResponse<any> | HttpErrorResponse) | TimeoutError,
  ): Observable<any> {
    if (event instanceof TimeoutError) {
      this.message('请求超时，请检查您的网络！');
      return ErrorObservable.create(event);
    }
    switch (event.status) {
      case 200:
        return of(event);
      case 401:
        this.message('认证超时，请重新登录！');
        this.router.navigate(['login']);
        break;
      case 403:
        this.message('拒绝请求！');
        break;
      case 404:
        this.message('未找到请求资源！');
        break;
      case 500:
        this.message('服务器异常，请联系管理员！');
        break;
      case 502:
        this.message('服务器未响应，请联系管理员！');
        break;
      default:
        this.message('未预知的错误，请联系管理员！');
        break;
    }
    return ErrorObservable.create(event);
  }

  message(msg: string) {
    this.toast.fail(msg);
    // alert(msg);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<| HttpHeaderResponse | HttpResponse<any>> {
    const token = this.storage.get(MyStorageService.tokenName);
    const userId = this.storage.get(MyStorageService.userIdName);

    const authReq = req.clone({
      headers: req.headers
        .set(MyStorageService.tokenName, token)
        .set(MyStorageService.userIdName, userId.toString())
      , url: this.backend + req.url
    });
    // @ts-ignore
    return next.handle(authReq)
      .pipe(mergeMap((event: any) => {
        if (event instanceof HttpResponse && event.status === 200) {
          return this.handleData(event);
        }
        return of(event);
      }), timeout(30000), catchError((err: HttpErrorResponse & TimeoutError) => this.handleData(err)));
  }

}
