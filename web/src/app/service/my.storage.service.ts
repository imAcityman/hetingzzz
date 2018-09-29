import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-web-storage';
import {tokenName} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MyStorageService {

  private static tokenName = 'authorization';
  private static preRouterName = 'preRouter';
  private static afterRouterName = 'afterRouter';

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

  setPreRouter(preRouterName: string) {
    this.set(MyStorageService.preRouterName, preRouterName);
  }

  setAfterRouter(afterRouterName: string) {
    this.set(MyStorageService.afterRouterName, afterRouterName);
  }

  getToken(): string {
    return this.get(MyStorageService.tokenName);
  }

  getPreRouter(): string {
    return this.get(MyStorageService.preRouterName);
  }

  getAfterRouter(): string {
    return this.get(MyStorageService.afterRouterName);
  }

}
