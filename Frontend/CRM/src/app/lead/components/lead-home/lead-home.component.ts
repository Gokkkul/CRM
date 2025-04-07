import {
  Component,
  ComponentRef,
  numberAttribute,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ILead } from '../../../models/model';
import { LeadService } from '../../services/lead.service';
import $ from 'jquery';
import 'datatables.net';
import { ViewLeadComponent } from '../view-lead/view-lead.component';
import { EditLeadComponent } from '../edit-lead/edit-lead.component';
import { AddLeadComponent } from '../add-lead/add-lead.component';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';

@Component({
  selector: 'app-lead-home',
  standalone: false,
  templateUrl: './lead-home.component.html',
  styleUrl: './lead-home.component.css',
})
export class LeadHomeComponent {
  selectedLead: any;
  leads: ILead[] = [];

  @ViewChild('viewLead', { read: ViewContainerRef })
  viewLeadContainer!: ViewContainerRef;
  private viewLeadComponentRef!: ComponentRef<ViewLeadComponent>;

  @ViewChild('editLead', { read: ViewContainerRef })
  editLeadContainer!: ViewContainerRef;
  private editLeadComponentRef!: ComponentRef<EditLeadComponent>;

  @ViewChild('addLead', { read: ViewContainerRef })
  addLeadContainer!: ViewContainerRef;
  private addLeadComponentRef!: ComponentRef<AddLeadComponent>;

  constructor(private leadService: LeadService, private swal: SweetAlertService) {}

  ngOnInit(): void {
    this.leadService.lead$.subscribe((data: any) => {
      this.leads = data;
      //   setTimeout(() => {
      //     $('#example').DataTable();
      // }, 1);
    });
  }

  // loadLeads() {
  //   this.leadService.getLeads().subscribe((data: any) => {
  //     this.leads = data;
  //   });
  // }

  showAddLead() {
    this.addLeadContainer.clear();
    this.addLeadComponentRef = this.addLeadContainer.createComponent(AddLeadComponent);
    this.addLeadComponentRef.instance.visible = true;

    
  }

  showEditLead(lead: ILead, index: number) {
    this.editLeadContainer.clear(); // Clear previous instances if any

    this.selectedLead = { lead, index }; // Assign the selected lead

    // Dynamically create and inject the child component
    this.editLeadComponentRef =
      this.editLeadContainer.createComponent(EditLeadComponent);

    // Pass the selected lead data to the child component
    this.editLeadComponentRef.instance.leadData = this.selectedLead.lead;
    this.editLeadComponentRef.instance.leadIndex = this.selectedLead.index; // `@Input()` in EditLeadComponent

    // Make the dialog visible
    this.editLeadComponentRef.instance.visible = true;
  }

  showViewLead(lead: ILead) {
    this.viewLeadContainer.clear(); // Clear previous instances if any

    this.selectedLead = lead; // Assign the selected lead

    // Dynamically create and inject the child component
    this.viewLeadComponentRef =
      this.viewLeadContainer.createComponent(ViewLeadComponent);

    // Pass the selected customer data to the child component
    this.viewLeadComponentRef.instance.leadData = this.selectedLead;

    // Make the dialog visible
    this.viewLeadComponentRef.instance.visible = true;
  }

  deleteLead(index: number) {
    this.leadService.deleteLead(index).subscribe(() => {
      this.swal.showToast('Customer Deleted Successfully.', 'success');
    });
  }
}
