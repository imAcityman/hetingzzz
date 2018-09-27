import { Injectable } from '@angular/core';
import {LoadingComponent} from './loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  public static loading: LoadingComponent;

  static open(): void {
    LoadingService.loading.open();
  }

  static close(): void {
    LoadingService.loading.close();
  }
}
