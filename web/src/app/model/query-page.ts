/**
 * 分页查询模型
 */
import {FormGroup} from '@angular/forms';
import {Response} from '../util/response';

export class QueryPage<T> {
  page: number;
  size: number;
  count: number;
  queryParam: FormGroup;
  data: Array<T>;
  extraParam: any;
  loading = false;
  hasData = true;

  constructor(page: number, size: number, queryParam?: FormGroup) {
    this.page = page;
    this.size = size;
    if (queryParam) {
      this.queryParam = queryParam;
    }
    this.extraParam = {};
    this.count = 0;
  }

  setPage(page?: number): void {
    if (page) {
      this.page = page;
    } else {
      this.page += 1;
    }
  }

  setResponse(res: Response, append = false): void {
    if (res.isSuccess) {
      if (append) {
        this.data = [...(this.data || []), ...res.data];
      } else {
        this.data = res.data;
      }
      // this.page++;
    }
    if (res.data.length < this.size) {
      this.hasData = false;
    }
  }

  addParam(key: string, value: any): void {
    this.extraParam[key] = value;
  }

  addParamObject(object: object): void {
    for (const i of Object.keys(object)) {
      this.addParam(i, object[i]);
    }
  }

  get params(): object {
    return Object.assign({page: this.page, pageSize: this.size}, this.queryParam?.value, this.extraParam);
  }

  get isEmpty(): boolean {
    return !this.loading && !this.data?.length;
  }
}
