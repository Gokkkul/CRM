import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetAlertService {
  fire(
    p0: string,
    p1: string,
    p2: string,
    arg0: { icon: string; title: string; text: string }
  ) {
    throw new Error('Method not implemented.');
  }

  constructor() {}

  // Basic alert
  showAlert(title: string, text: string, icon: any) {
    Swal.fire({ title, text, icon });
  }

  // Success alert
  showSuccess(message: string) {
    Swal.fire('Success!', message, 'success');
  }

  // Error alert
  showError(message: string) {
    Swal.fire('Error!', message, 'error');
  }

  // Confirmation dialog
  showConfirmation(message: string): Promise<any> {
    return Swal.fire({
      title: 'Are you sure?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    });
  }

  showInfo(title: string, text: string) {
    Swal.fire({
      icon: 'info',
      title: title,
      text: text,
    });
  }

  // Toast alert
showToast(message: string, icon: 'success' | 'error' | 'info' | 'warning') {
  Swal.fire({
    toast: true,
    position: 'top', // You can change this to other positions like 'bottom-end'
    icon: icon,
    title: message,
    showConfirmButton: false,
    timer: 3000, // Time (in ms) the toast will stay visible
    timerProgressBar: true,
  });
}

}
