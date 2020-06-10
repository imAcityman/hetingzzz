import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  marFormAsDirty(validateForm: FormGroup) {
    for (const i in validateForm.controls) {
      if (validateForm.controls.hasOwnProperty(i)) {
        validateForm.controls[i].markAsDirty();
        validateForm.controls[i].updateValueAndValidity();
      }
    }
  }
}

