import {Component, Input, OnInit} from '@angular/core';
import {RequestService} from '../../../../../service/request.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConstantService} from '../../../../../service/constant.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-write-box',
  templateUrl: './write-box.component.html',
  styleUrls: ['./write-box.component.less']
})
export class WriteBoxComponent implements OnInit {
  @Input() replay: any;
  placeholder = '写点什么吧...';
  validateForm!: FormGroup;

  constructor(private request: RequestService, private fb: FormBuilder, private constantService: ConstantService, private modalController: ModalController) {
    this.validateForm = this.fb.group({
      content: [null, [Validators.required]],
      targetuserid: [null, [Validators.required]],
      replyid: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    console.log(this.replay);
    this.validateForm.patchValue(this.replay);
  }

  ok() {
    this.modalController.dismiss(true).then();
  }

  cancel() {
    this.modalController.dismiss().then();
  }

  async submit() {
    if (this.validateForm.get('content').invalid) {
      this.constantService.messageWarn('请输入留言内容').then();
      return;
    }
    const loadingModal = await this.constantService.loading('提交中');

    this.request.post('/board/leaveMessage', this.validateForm.value).subscribe((res) => {
      if (res.isSuccess) {
        this.modalController.dismiss(true).then();
        this.ok();
      }
      loadingModal?.dismiss().then();
    }, error => {
      loadingModal?.dismiss().then();
    });
  }

}
