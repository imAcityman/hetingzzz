import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RequestService} from '../../../../../service/request.service';
import {ConstantService} from '../../../../../service/constant.service';
import {CommonParams} from '../../../../../config/common-params';
import {ModelBigDate} from '../../../../../model/model-big-date';
import {ModalController} from '@ionic/angular';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-edit-big-date',
  templateUrl: './edit-big-date.component.html',
  styleUrls: ['./edit-big-date.component.less']
})
export class EditBigDateComponent implements OnInit {

  @Input() bigDate: ModelBigDate;
  commonParams = CommonParams;
  validateForm!: FormGroup;

  constructor(private request: RequestService, private fb: FormBuilder, private constantService: ConstantService, private modalController: ModalController) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      id: [],
      datetime: [null, [Validators.required]],
      title: [null, [Validators.required]],
      isGood: [null, [Validators.required]]
    });
    if (this.bigDate) {
      this.validateForm.patchValue(this.bigDate);
    }
  }

  submit(type) {
    this.constantService.markAsDirty(this.validateForm);
    if (this.validateForm.valid) {
      const params = Object.assign({}, this.validateForm.value, {
        datetime: dayjs(this.validateForm.get('datetime').value).format('YYYY-MM-DD')
      });
      this.constantService.confirm({
        msg: `${type === 1 ? '确认新增？' : '确认修改？'}`, okHandler: () => {
          if (type === 1) {
            this.create(params);
          } else {
            this.update(params);
          }
        }
      }).then();
    } else {
      this.constantService.messageWarn('请将选项都填完！').then();
    }
  }

  async create(param) {
    delete param.id;
    const loadingModal = await this.constantService.loading('保存中');
    this.request.post('/bigdate/add', param).subscribe(res => {
      loadingModal?.dismiss();
      this.ok();
    }, () => {
      loadingModal?.dismiss();
    });
  }

  async update(param) {
    const loadingModal = await this.constantService.loading('修改中');
    this.request.post('/bigdate/update', param).subscribe(res => {
      this.ok();
      loadingModal?.dismiss();
    }, () => {
      loadingModal?.dismiss();
    });
  }

  cancel() {
    this.modalController.dismiss(false).then();
  }

  ok() {
    this.modalController.dismiss(true).then();
  }

  delete() {
    this.constantService.confirm({
      msg: '确认删除这一条?', okHandler: async () => {
        const loadingModal = await this.constantService.loading('删除中');
        this.request.post('/bigdate/delete', {dateId: this.bigDate.id}).subscribe(res => {
          loadingModal?.dismiss();
          this.ok();
        }, () => {
          loadingModal?.dismiss();
        });
      }
    }).then();
  }
}
