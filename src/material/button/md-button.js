import { inject } from 'aurelia-dependency-injection';
import { MdToastService } from 'aurelia-materialize-bridge/toast/toastService';

@inject(MdToastService)
export class MdButtonDemo {
  disabled = false;

  constructor(toast) {
    this.toast = toast;
  }

  showToast() {
    this.toast.show('You clicked me!', 2000);
  }
}
