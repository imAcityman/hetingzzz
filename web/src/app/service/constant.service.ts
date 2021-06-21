import {Injectable} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {MyStorageService} from './my.storage.service';
import {AlertController, IonicSafeString, LoadingController, NavController, ToastController} from '@ionic/angular';
import {Title} from '@angular/platform-browser';
import {RequestService} from './request.service';
import {Router} from '@angular/router';
import {CommonParams} from '../config/common-params';

/***
 * 初始化各类字典数据及工具函数
 */
@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor(private storage: MyStorageService, private loadingController: LoadingController, private toastController: ToastController,
              private title: Title, private request: RequestService, private alertController: AlertController,
              private navController: NavController) {
  }

  async loading(msg?: string): Promise<any> {
    const loading = await this.loadingController.create({
      message: msg || '请稍后...',
      mode: 'ios'
    });
    await loading.present();
    return loading;
  }

  async messageSuccess(msg: string, isBottom?: boolean): Promise<any> {
    const message = await this.toastController.create({
      message: new IonicSafeString(`<div style="display: flex;align-items: center;line-height: 1;"><ion-icon style="color: green;margin-right: 5px;font-size: 18px" name="checkmark-circle-outline"></ion-icon><span>${msg}</span></div>`),
      duration: 2000,
      position: isBottom ? 'bottom' : 'top',
      mode: 'ios'
    });
    await message.present();
    return message;
  }

  async messageError(msg: string, isBottom?: boolean): Promise<any> {
    const message = await this.toastController.create({
      message: new IonicSafeString(`<div style="display: flex;align-items: center;line-height: 1;"><ion-icon style="color: red;margin-right: 5px;font-size: 18px" name="close-circle-outline"></ion-icon><span>${msg}</span></div>`),
      duration: 2000,
      position: isBottom ? 'bottom' : 'top',
      mode: 'ios'
    });
    await message.present();
    return message;
  }

  async messageWarn(msg: string, isBottom?: boolean): Promise<any> {
    const message = await this.toastController.create({
      message: new IonicSafeString(`<div style="display: flex;align-items: center;line-height: 1;"><ion-icon style="color: #ffa400;margin-right: 5px;font-size: 18px" name="alert-circle-outline"></ion-icon><span>${msg}</span></div>`),
      duration: 2000,
      position: isBottom ? 'bottom' : 'top',
      mode: 'ios'
    });
    await message.present();
    return message;
  }

  async confirm(option: { msg: string, header?: string, okHandler?: () => void, cancelHandler?: () => void }): Promise<any> {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `${option.header || ''}`,
      message: `${option.msg}`,
      mode: 'ios',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            if (option.cancelHandler) {
              option.cancelHandler();
            }
          }
        }, {
          text: '确定',
          handler: () => {
            if (option.okHandler) {
              option.okHandler();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  setPlatFormTitle(title: string): void {
    this.title.setTitle(title);
  }

  isIe(): boolean {
    return navigator.userAgent.toLowerCase().indexOf('trident') > -1;
  }

  hasScrollbar(): boolean {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
  }

  getClientWidth(): number {
    return document.body.clientWidth + (this.hasScrollbar() ? 15 : 0);
  }

  markAsDirty(validateForm: FormGroup): void {
    for (const i in validateForm.controls) {
      if (validateForm.controls[i]) {
        validateForm.controls[i].markAsDirty();
        validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  controlMarkAsDirty(formControl: AbstractControl): void {
    formControl.markAsDirty();
    formControl.updateValueAndValidity();
  }

  /**
   * 是否登录超时
   */
  loginValid(): boolean {
    const token = this.storage.get(CommonParams.tokenName);
    const loginTime = parseInt(this.storage.get(CommonParams.loginTimeName), 10);
    return token && loginTime && (loginTime + CommonParams.tokenPassTime) > new Date().getTime();
  }

  logout(): void {
    this.confirm({
      msg: '确认注销登录？', okHandler: () => {
        this.storage.clear();
        this.navController.navigateRoot('home').then();
      }
    }).then();
  }

  get isWechatBrowser(): boolean {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i)?.includes('micromessenger');
  }
}
