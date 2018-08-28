import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class MyStorageService {

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

}
