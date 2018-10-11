import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
  }

  private _sendMessage: ReplaySubject<any> = new ReplaySubject<any>(1);

  /** * 向其他组件发送信息 * @param message 需要发送的信息 * @returns {Observavle<any>} */
  public sendMessage(message: any) {
    this._sendMessage.next(message);
  }

  /** *订阅其他组件发送来的消息 * @returns {Observalue<any>} */
  public getMessage(): Observable<any> {
    return this._sendMessage.asObservable();
  }
}
