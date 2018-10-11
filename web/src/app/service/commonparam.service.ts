import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonparamService {

  public static readonly SUCCESS = 1;
  public static readonly FAIL = 0;
  public static readonly ERROR = -1;


}
