import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-web-storage';
import {CommonParams} from '../config/common-params';

@Injectable({
  providedIn: 'root'
})
export class MyStorageService {

  static tokenName = 'authorization';
  static userIdName = 'userId';
  static preRouterName = 'preRouter';
  static afterRouterName = 'afterRouter';

  constructor(private localStorage: LocalStorageService) {
  }

  get(key: string) {
    return this.localStorage.get(key) || '';
  }

  set(key: string, value: any) {
    this.localStorage.set(key, value);
  }

  getObject(key: string) {
    return JSON.parse(this.get(key));
  }

  setObject(key: string, value: any) {
    this.set(key, JSON.stringify(value));
  }

  delete(key: string) {
    this.localStorage.remove(key);
  }

  clear() {
    this.localStorage.clear();
  }


  // 业务相关
  setToken(token: string) {
    this.set(MyStorageService.tokenName, token);
  }

  setUserId(userId: string) {
    this.set(MyStorageService.userIdName, userId);
  }

  setPreRouter(preRouterName: string) {
    this.set(MyStorageService.preRouterName, preRouterName);
  }

  setAfterRouter(afterRouterName: string) {
    this.set(MyStorageService.afterRouterName, afterRouterName);
  }

  getToken(): string {
    return this.get(MyStorageService.tokenName);
  }

  getUserId(): string {
    return this.get(MyStorageService.userIdName);
  }

  getPreRouter(): string {
    return this.get(MyStorageService.preRouterName);
  }

  getAfterRouter(): string {
    return this.get(MyStorageService.afterRouterName);
  }

  set oilUpdateTime(updateTime: number) {
    this.set(CommonParams.OIL_UPDATE_DATE, updateTime || 0);
  }

  get oilUpdateTime() {
    return this.get(CommonParams.OIL_UPDATE_DATE);
  }

}
