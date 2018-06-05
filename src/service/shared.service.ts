import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class SharedService {

  // private messageSource = new BehaviorSubject("default message");
  // currentMessage = this.messageSource.asObservable();

  // constructor() { }

  // changeMessage(message: string) {
  //   this.messageSource.next(message)
  // }

  isSubmitDisabled:boolean;
  isSignatureBoxHidden: boolean;
  isagreeDisabled: boolean;
  isDisagreeDisabled: boolean;

  constructor() { 
    this.isSubmitDisabled = false;
    this.isSignatureBoxHidden = false;
    this.isagreeDisabled = false;
    this.isDisagreeDisabled = false;
  }

  setVal(isSubmitDisabled, isSignatureBoxHidden, type) {
    this.isSubmitDisabled = isSubmitDisabled;
    this.isSignatureBoxHidden = isSignatureBoxHidden;
    
    if(type) {
      if(type == 'agree') {
        this.isagreeDisabled = false;
        this.isDisagreeDisabled = true;
      } else if('disagree'){
        this.isagreeDisabled = true;
        this.isDisagreeDisabled = false;
      } else {
        this.isagreeDisabled = false;
        this.isDisagreeDisabled = false;
      }
    }
}

getVal() {

    return {'buttonDisabled': this.isSubmitDisabled, 'signatureHidden': this.isSignatureBoxHidden,
            'isagreeDisabled': this.isagreeDisabled, 'isDisagreeDisabled': this.isDisagreeDisabled};
    }
}