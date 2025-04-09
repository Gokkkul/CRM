import { Component, Input } from '@angular/core';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { EmailLogService } from '../../services/email-log.service';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-send-email',
  standalone: false,
  templateUrl: './send-email.component.html',
  styleUrl: './send-email.component.css'
})
export class SendEmailComponent {

  userId: number = 0;
  @Input() visible: boolean = false;

  emailForm = {
    recipient: '',
    emailSubject: '',
    emailBody: ''
  };

  constructor(
    private emailService: EmailLogService,
    private swal: SweetAlertService,
    private sharedService: SharedService
  ) {}

  // Method to handle the form submission
  onSendEmail() {
    // const { recipient, subject, message } = this.emailForm;

    // if (!recipient || !subject || !message) {
    //   this.swal.showToast('Please fill all fields!', 'error');
    //   return;
    // }

    // this.emailService.sendEmail({ recipient, subject, message, sentBy: 'Current User' });

    const { recipient, emailSubject, emailBody } = this.emailForm;

  if (!recipient || !emailSubject || !emailBody) {
    this.swal.showToast('Please fill all fields!', 'error');
    return;
  }
  console.log(this.emailForm);
  

  // Subscribe to the userId observable to get the current user's ID
  this.sharedService.userId$.subscribe((userId) => {
    this.userId = userId;
    if (!userId || userId === 0) {
      this.swal.showToast('No logged-in user found.', 'error');
      return;
    }

    // Construct email data and send the email
    
  });
  this.emailService.sendEmail({
    recipient,
    emailSubject,
    emailBody,
    sentBy: this.userId, // Use the fetched userId
  })
  // .subscribe({
  //   next: () => {
  //     this.swal.showToast('Email sent successfully!', 'success');
  //   },
  //   error: (err) => {
  //     this.swal.showToast(`Failed to send email: ${err.message}`, 'error');
  //   }
  // });
  }

  closeDialog() {
    this.visible = false;
    this.emailForm = { recipient: '', emailSubject: '', emailBody: '' }; // Reset form fields
  }
}
