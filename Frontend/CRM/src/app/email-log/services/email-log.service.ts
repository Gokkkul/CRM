import { Injectable } from '@angular/core';
import { IEmail } from '../../models/model';
import { SweetAlertService } from '../../shared/services/sweet-alert.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailLogService {

  private apiUrl = 'http://localhost:3000/api/email-log';

  private emailLogs: IEmail[] = [];
  private emailLogsSubject = new BehaviorSubject<IEmail[]>(this.emailLogs);
  emailLogs$ = this.emailLogsSubject.asObservable();

  constructor(private http: HttpClient, private swal: SweetAlertService) {
    this.getEmailLogs();
  }

  getEmailLogs() {
    this.http.get<{ result: IEmail[] }>(`${this.apiUrl}/get-email-logs`).subscribe((data:any) => {
      this.emailLogs = data;
      this.emailLogsSubject.next(this.emailLogs);
    });
  }

  addEmailLog(data: IEmail) {
    this.emailLogs.push(data);
    this.emailLogsSubject.next(this.emailLogs);
    return this.http.post(`${this.apiUrl}/add-email-log`, data);
  }


  deleteEmailLog(index: number) {
    const { id } = this.emailLogs[index];
    this.emailLogs = this.emailLogs.filter(item => item.id !== id);
    this.emailLogsSubject.next(this.emailLogs);
    return this.http.delete(`${this.apiUrl}/delete-email-log/${id}`);
  }

  sendEmail(emailData: IEmail) {
    this.emailLogs.push(emailData);
    this.emailLogsSubject.next(this.emailLogs);

    this.http.post(`${this.apiUrl}/send-email`, emailData).subscribe({
      next: () => {
        this.swal.showToast('Email sent successfully.', 'success');
      },
      error: () => {
        this.swal.showToast('Failed to send email.', 'error');
      },
    });
    


    // return this.http.post(`${this.apiUrl}/send-email`, emailData)
  }
}
