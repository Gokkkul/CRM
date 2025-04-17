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
import { SalesOpportunityService } from '../../../sales-opportunity/services/sales-opportunity.service';
import { CustomerService } from '../../../customer/services/customer.service';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-lead-home',
  standalone: false,
  templateUrl: './lead-home.component.html',
  styleUrl: './lead-home.component.css',
})
export class LeadHomeComponent {
  selectedLead: any;
  leads: ILead[] = [];
  filteredLeads: ILead[] = [];
  page: number = 1;
  pageSize: number = 5;
  isLoading: boolean = false;

  @ViewChild('viewLead', { read: ViewContainerRef })
  viewLeadContainer!: ViewContainerRef;
  private viewLeadComponentRef!: ComponentRef<ViewLeadComponent>;

  @ViewChild('editLead', { read: ViewContainerRef })
  editLeadContainer!: ViewContainerRef;
  private editLeadComponentRef!: ComponentRef<EditLeadComponent>;

  @ViewChild('addLead', { read: ViewContainerRef })
  addLeadContainer!: ViewContainerRef;
  private addLeadComponentRef!: ComponentRef<AddLeadComponent>;

  userRole = 'employee'

  constructor(private leadService: LeadService, private swal: SweetAlertService, private customerService: CustomerService, private sharedService: SharedService) {
    this.sharedService.userRole$.subscribe(role => {
      this.userRole = role;
    })

  }


  handleSearch(keyword: string): void {
    this.filteredLeads = this.leads.filter(lead =>
      lead.assignedTo?.name.toLowerCase().includes(keyword.toLowerCase()) || // Search by name
      lead.email.toLowerCase().includes(keyword.toLowerCase()) || // Search by email
      lead.name.toLowerCase().includes(keyword.toLowerCase()) || // Search by phone (optional)
      lead.status.toLowerCase().includes(keyword.toLowerCase()) // Search by address (optional)
    );
  }

  
  ngOnInit(): void {
    this.isLoading = true;
    this.leadService.lead$.subscribe((data: any) => {
      if (data.length) this.isLoading = false;
      this.leads = data;
      this.filteredLeads = [...this.leads];
      // console.log("This is from lead home",this.leads)
      // setTimeout(() => {
      //   $('#example').DataTable();
      // }, 300);
    });
   
  }

  // loadLeads() {
  //   this.leadService.getLeads().subscribe((data: any) => {
  //     this.leads = data;
  //   });
  // }

addToCustomer(){
  // console.log('Button Clicked');
  
  this.customerService.addLeadToCustomer()
}

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
