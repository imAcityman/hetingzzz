import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/operator/map';
import {Router} from '@angular/router';
import {MyStorageService} from './my.storage.service';
import {environment} from '../../environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {

  private backend = environment.apiHost;

  constructor(private router: Router, private storage: MyStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorization = this.storage.get('token');
    const userId = this.storage.get('userid');
    const authReq = req.clone({
      headers: req.headers
        .set('Authorization', authorization)
        .set('userid', userId)
        .set('Content-Type', 'application/json;charset=UTF-8')
      , url: this.backend + req.url
    });
    return next.handle(authReq).map((event) => {
      if (event instanceof HttpResponse) {
        switch (event.status) {
          case 200:
            if (event.body['code'] === 1 || event.body['code'] === 0 ) { /***请求正常***/
              return event;
            } else if (event.body['code'] === -1) { /***请求报错***/
              alert(event.body['msg']);
              throw event.body['msg'];
            } else if (event.body['code'] === 401) { /***登录超时***/
              this.router.navigate(['login']);
            }
            break;
          case 401:
            this.router.navigate(['login']);
            break;
          case 400:
            alert('服务器开小差了~');
            break;
          case 504:
            alert('服务器开小差了~');
            break;
          case 404:
            alert('服务器开小差了~');
            break;
          default:
            console.log('error');
        }
      }
      return event;
    });

  }
}
