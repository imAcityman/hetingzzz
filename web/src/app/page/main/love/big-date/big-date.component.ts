import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../../../service/request.service';
import {LoadingService} from '../../../../component/loading/loading.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../../../util/data.service';
import {ModalService, ToastService} from 'ng-zorro-antd-mobile';
import * as dayjs from 'dayjs';
import {CommonParams} from '../../../../config/common-params';

@Component({
  selector: 'app-big-date',
  templateUrl: './big-date.component.html',
  styleUrls: ['./big-date.component.less']
})
export class BigDateComponent implements OnInit {

  dates: Array<any>;
  isVisible1 = false;
  isVisible2 = false;
  validateForm!: FormGroup;
  isGoodOptions = CommonParams.isGoodOptions;
  currentDate;
  showData = {
    date: '',
    title: '',
    isGood: '好事'
  };

  constructor(private request: RequestService, private fb: FormBuilder, private dataService: DataService,
              private toast: ToastService, private modal: ModalService) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      date: [null, [Validators.required]],
      title: [null, [Validators.required]],
      isGood: [null, [Validators.required]]
    });
    this.validateForm.valueChanges.subscribe(data => {
      if (!data.isGood || data.isGood.length <= 0) {
        this.validateForm.get('isGood').setValue([this.isGoodOptions[0]]);
        return;
      }
      this.showData = {
        date: dayjs(data.date).format('YYYY-MM-DD'),
        title: data.title,
        isGood: data.isGood[0].value === 2 ? '坏事' : '好事'
      };
    });
    this.resetForm();
    this.getBigDate();
  }

  resetForm() {
    this.dataService.marFormReset(this.validateForm);
    this.validateForm.patchValue({
      date: dayjs(new Date()).toDate(),
      title: '',
      isGood: [this.isGoodOptions[0]]
    });
  }

  getBigDate() {
    this.request.get('/bigdate/getBigDate').subscribe(res => {
      if (res.isSuccess) {
        this.dates = res.data;
      }
    });
  }

  addNew() {
    this.resetForm();
    this.isVisible1 = !this.isVisible1;
  }

  showUpdate(item) {
    this.currentDate = item;
    this.validateForm.patchValue({
      date: dayjs(item.datetime).toDate(),
      title: item.title,
      isGood: [this.isGoodOptions[item.isGood - 1]]
    });
    this.isVisible2 = !this.isVisible2;
  }

  delete(dateId) {
    this.modal.alert('', '确认删除这一条?', [
      {
        text: '取消', onPress: () => {
        }
      },
      {
        text: '确定', onPress: () => {
          this.request.post('/bigdate/delete', {dateId}).subscribe(res => {
            this.toast.success('删除成功');
            this.isVisible2 = false;
            this.getBigDate();
          }, () => {
          });
        }
      }
    ]);
  }

  submit(type) {
    this.dataService.marFormAsDirty(this.validateForm);
    if (this.validateForm.valid) {
      const value = this.validateForm.value;
      const param = {
        id: this.currentDate?.id,
        datetime: this.showData.date,
        title: value.title,
        isGood: value.isGood[0].value
      };
      this.modal.alert('', `${type === 1 ? '确认新增？' : '确认修改？'}`, [
        {
          text: '取消', onPress: () => {
          }
        },
        {
          text: '确定', onPress: () => {
            if (type === 1) {
              delete param.id;
              this.create(param);
            } else {
              this.update(param);
            }
          }
        }]);
    }
  }

  create(param) {
    this.request.post('/bigdate/add', param).subscribe(res => {
      this.isVisible1 = false;
      this.resetForm();
      this.getBigDate();
    }, () => {
    });
  }

  update(param) {
    this.request.post('/bigdate/update', param).subscribe(res => {
      this.isVisible2 = false;
      this.resetForm();
      this.getBigDate();
    }, () => {
    });
  }
}
