import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/operator/map';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers
        .set('Authorization', '11111111')
        .set('Content-Type', 'application/json;charset=UTF-8')
    });
    return next.handle(authReq).map((event) => {
      if (event instanceof HttpResponse) {
        switch (event.status) {
          case 200:
            if (event.body['code'] !== -1) {
              return event;
            } else if (event.body['code'] === -1) {
              alert(event.body['msg']);
              throw event.body['msg'];
            }
            break;
          case 401:
            console.log('error:401');
            break;
          case 400:
            console.log('error:400');
            break;
          default:
            console.log('error');
        }
      }
      return event;
    });

  }
}
