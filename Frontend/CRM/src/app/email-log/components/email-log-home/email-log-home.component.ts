import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { IEmail } from '../../../models/model';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { ViewEmailComponent } from '../view-email/view-email.component';
import { EmailLogService } from '../../services/email-log.service';
import { SendEmailComponent } from '../send-email/send-email.component';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-email-log-home',
  standalone: false,
  templateUrl: './email-log-home.component.html',
  styleUrl: './email-log-home.component.css',
})
export class EmailLogHomeComponent {
  emailLogs: IEmail[] = [];
  selectedEmailLog: any;
  filteredEmailLogs: IEmail[] = [];
  page: number = 1;
  pageSize: number = 5;
  isLoading: boolean = false;

  @ViewChild('viewEmailLog', { read: ViewContainerRef })
  viewEmailLogContainer!: ViewContainerRef;
  private viewEmailComponentRef!: ComponentRef<ViewEmailComponent>;

  @ViewChild('sendEmail', { read: ViewContainerRef })
  sendEmailContainer!: ViewContainerRef;
  private sendEmailComponentRef!: ComponentRef<SendEmailComponent>;


  userRole = 'employee'

  constructor(
    private emailService: EmailLogService,
    private swal: SweetAlertService,
    private sharedService: SharedService
  ) {
    sharedService.userRole$.subscribe(role => {
      this.userRole = role;
    })
  }

  ngOnInit() {
    this.isLoading = true;
    this.emailService.emailLogs$.subscribe((data: any) => {
      if (data.length) this.isLoading = false;
      this.emailLogs = data;
      this.filteredEmailLogs = [...this.emailLogs]

      

      // setTimeout(() => {
      //   $('#example').DataTable();
      // }, 300);
    });
  }

  handleSearch(keyword: string): void {
    this.filteredEmailLogs = this.emailLogs.filter(emailLog =>
      emailLog.emailSubject.toLowerCase().includes(keyword.toLowerCase()) || // Search by name
      emailLog.recipient.toLowerCase().includes(keyword.toLowerCase()) || // Search by email
      emailLog.emailBody.toLowerCase().includes(keyword.toLowerCase()) || // Search by phone (optional)
      emailLog.sentAt?.toLowerCase().includes(keyword.toLowerCase()) // Search by address (optional)
    );
  }

  

  showSendEmail() {
    // Logic to trigger the email sending process
    // console.log('Sending email...');
    // this.swal.showToast(
    //   'Email sending feature is not implemented yet.',
    //   'info'
    // );

    this.sendEmailContainer.clear()
    this.sendEmailComponentRef =
      this.sendEmailContainer.createComponent(SendEmailComponent);
    this.sendEmailComponentRef.instance.visible = true;
    // console.log('sent...');
    
  }

  showViewEmailLog(emailLog: IEmail) {
    this.viewEmailLogContainer.clear(); // Clear previous component instances

    this.selectedEmailLog = emailLog; // Assign the selected email log

    // Dynamically create and inject the child component
    this.viewEmailComponentRef =
      this.viewEmailLogContainer.createComponent(ViewEmailComponent);

    // Pass the selected email log data to the child component
    this.viewEmailComponentRef.instance.emailLogData = this.selectedEmailLog;

    // Make the dialog visible
    this.viewEmailComponentRef.instance.visible = true;
  }

  deleteEmailLog(index: number) {
    this.emailService.deleteEmailLog(index).subscribe(() => {
      console.log('Deleted email log');
      this.swal.showToast('Email log deleted successfully.', 'success');
    });
  }
}
