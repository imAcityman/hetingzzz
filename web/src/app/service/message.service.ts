import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {Messagebody} from '../util/messagebody';
import {CommonParams} from '../util/common-params';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
  }

  private _sendMessage: ReplaySubject<any> = new ReplaySubject<any>(1);

  /** * 向其他组件发送信息 * @param message 需要发送的信息 * @returns {Observavle<any>} */
  public sendMessage(message: Messagebody) {
    this._sendMessage.next(message);
  }

  /** *订阅其他组件发送来的消息 * @returns {Observalue<any>} */
  public getMessage(): Observable<Messagebody> {
    return this._sendMessage.asObservable();
  }

  public showBottomMenu() {
    const message = new Messagebody(CommonParams.HIDE_MENU, {menu_type: CommonParams.BOTTOM_MENU, flag: false});
    this._sendMessage.next(message);
  }

  public hideBottomMenu() {
    const message = new Messagebody(CommonParams.HIDE_MENU, {menu_type: CommonParams.BOTTOM_MENU, flag: true});
    this._sendMessage.next(message);
  }

  public showTopMenu() {
    const message = new Messagebody(CommonParams.HIDE_MENU, {menu_type: CommonParams.TOP_MENU, flag: false});
    this._sendMessage.next(message);
  }

  public hideTopMenu() {
    const message = new Messagebody(CommonParams.HIDE_MENU, {menu_type: CommonParams.TOP_MENU, flag: true});
    this._sendMessage.next(message);
  }
}
