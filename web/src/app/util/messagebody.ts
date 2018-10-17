export class Messagebody {

  private _type;
  private _body;

  constructor(type, body?) {
    this._type = type;
    if (body) {
      this._body = body;
    }
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get body() {
    return this._body;
  }

  set body(value) {
    this._body = value;
  }
}
