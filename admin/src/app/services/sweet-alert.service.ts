import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }


  showSuccess(message: string) {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: message
    });
  }


  showError(message: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Ops!',
      text: message
    });
  }


}
