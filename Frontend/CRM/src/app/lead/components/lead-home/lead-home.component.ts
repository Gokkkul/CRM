import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ILead } from '../../../models/model';
import { LeadService } from '../../services/lead.service';
import $ from 'jquery';
import 'datatables.net';
import { ViewLeadComponent } from '../view-lead/view-lead.component';

@Component({
  selector: 'app-lead-home',
  standalone: false,
  templateUrl: './lead-home.component.html',
  styleUrl: './lead-home.component.css'
})
export class LeadHomeComponent {
  selectedLead: any;
  leads: ILead[] = [];

  @ViewChild('viewLead', { read: ViewContainerRef }) viewLeadContainer!: ViewContainerRef;
  private viewLeadComponentRef!: ComponentRef<ViewLeadComponent>;

  constructor(private leadService: LeadService) {}

  ngOnInit(): void {
    this.leadService.getLeads().subscribe((data:any) => {
      this.leads = data;
      setTimeout(() => {
        $('#example').DataTable();
    }, 1);
    })

  }


  // loadLeads() {
  //   this.leadService.getLeads().subscribe((data: any) => {
  //     this.leads = data;
  //   });
  // }

  showAddLead() {
    // Handle showing add lead form
  }

  showEditLead(lead: ILead) {
    // Handle editing a lead
  }

  showViewLead(lead: ILead) {
    this.viewLeadContainer.clear(); // Clear previous instances if any
    
        this.selectedLead = lead; // Assign the selected lead
    
        // Dynamically create and inject the child component
        this.viewLeadComponentRef = this.viewLeadContainer.createComponent(ViewLeadComponent);
    
        // Pass the selected customer data to the child component
        this.viewLeadComponentRef.instance.leadData = this.selectedLead;
    
        // Make the dialog visible
        this.viewLeadComponentRef.instance.visible = true;
  }

  deleteLead(id: number) {
    
  }
}
