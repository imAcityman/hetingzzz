import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonparamService {

  public static readonly SUCCESS = 1;
  public static readonly FAIL = 0;
  public static readonly ERROR = -1;

  public static readonly HIDE_MENU = 1; // 隐藏菜单
  public static readonly TOP_MENU = 'TOP'; // 上层菜单
  public static readonly BOTTOM_MENU = 'BOTTOM'; // 上层菜单

}
