import {CommonParams} from './common-params';

export class Response {
  private _code: number;
  private _msg: string;
  private _data: any;

  constructor({code, msg, data}) {
    this._code = code;
    this._msg = msg;
    this._data = data;
  }

  set code(code: number) {
    this._code = code;
  }

  get code() {
    return this._code;
  }

  get msg(): string {
    return this._msg;
  }

  set msg(value: string) {
    this._msg = value;
  }

  get data(): any {
    return this._data;
  }

  set data(value: any) {
    this._data = value;
  }

  get isSuccess() {
    return this._code === CommonParams.SUCCESS;
  }
}
