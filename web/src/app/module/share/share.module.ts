import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzModalModule} from "ng-zorro-antd/modal";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzResultModule} from 'ng-zorro-antd/result';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {NzTimelineModule} from 'ng-zorro-antd/timeline';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzAffixModule} from 'ng-zorro-antd/affix';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {PlatformModule} from '@angular/cdk/platform';


@NgModule({
  exports: [
    IonicModule,
    NzIconModule,
    ReactiveFormsModule,
    FormsModule,
    NzDrawerModule,
    NzButtonModule,
    NzTabsModule,
    NzAffixModule,
    NzDividerModule,
    NzTimelineModule,
    NzUploadModule,
    NzSkeletonModule,
    PlatformModule,
    NzSpaceModule,
    NzAlertModule,
    NzResultModule,
    NzFormModule,
    NzInputModule,
    NzModalModule,
    NzTagModule,
    NzCheckboxModule,
    HttpClientModule,
  ],
  declarations: [],
  imports: [
    CommonModule,
    IonicModule.forRoot({
      animated: true,
      mode: 'ios'
    }),
  ]
})
export class ShareModule {
}
