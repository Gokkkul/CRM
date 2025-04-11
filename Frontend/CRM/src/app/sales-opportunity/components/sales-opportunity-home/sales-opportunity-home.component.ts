import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SalesOpportunityService } from '../../services/sales-opportunity.service';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { ViewSalesOpportunityComponent } from '../view-sales-opportunity/view-sales-opportunity.component';
import { ISalesOpportunity } from '../../../models/model';
import { EditSalesOpportunityComponent } from '../edit-sales-opportunity/edit-sales-opportunity.component';
import { AddSalesOpportunityComponent } from '../add-sales-opportunity/add-sales-opportunity.component';

@Component({
  selector: 'app-sales-opportunity-home',
  standalone: false,
  templateUrl: './sales-opportunity-home.component.html',
  styleUrl: './sales-opportunity-home.component.css'
})
export class SalesOpportunityHomeComponent {
  visible = false;
  salesOpportunities: ISalesOpportunity[] = [];
  selectedOpportunity: any;

  constructor(private salesOpportunityService: SalesOpportunityService, private swal: SweetAlertService) {}

  ngOnInit() {
    this.salesOpportunityService.salesOpportunity$.subscribe((data: any) => {
      this.salesOpportunities = data;
      console.log(data);
      
      setTimeout(() => {
        $('#example').DataTable();
      }, 300);
    });
  }

  @ViewChild('editSalesOpportunity', { read: ViewContainerRef }) editSalesOpportunityContainer!: ViewContainerRef;
  private editSalesOpportunityComponentRef!: ComponentRef<EditSalesOpportunityComponent>;

  @ViewChild('addSalesOpportunity', { read: ViewContainerRef }) addSalesOpportunityContainer!: ViewContainerRef;
  private addSalesOpportunityComponentRef!: ComponentRef<AddSalesOpportunityComponent>;

  @ViewChild('viewSalesOpportunity', { read: ViewContainerRef }) viewSalesOpportunityContainer!: ViewContainerRef;
  private viewSalesOpportunityComponentRef!: ComponentRef<ViewSalesOpportunityComponent>;

  showEditSalesOpportunity(opportunity: ISalesOpportunity, index: number) {
    this.editSalesOpportunityContainer.clear(); // Clear previous instances if any

    this.selectedOpportunity = { opportunity, index }; // Assign the selected opportunity

    this.editSalesOpportunityComponentRef = this.editSalesOpportunityContainer.createComponent(EditSalesOpportunityComponent);

    this.editSalesOpportunityComponentRef.instance.salesOpportunityData = this.selectedOpportunity.opportunity;
    this.editSalesOpportunityComponentRef.instance.salesOpportunityIndex = this.selectedOpportunity.index;

    this.editSalesOpportunityComponentRef.instance.visible = true;
  }

  showAddSalesOpportunity() {
    this.addSalesOpportunityContainer.clear();
    this.addSalesOpportunityComponentRef = this.addSalesOpportunityContainer.createComponent(AddSalesOpportunityComponent);
    this.addSalesOpportunityComponentRef.instance.visible = true;
  }

  showViewSalesOpportunity(opportunity: ISalesOpportunity) {
    this.viewSalesOpportunityContainer.clear(); // Clear previous instances if any

    this.selectedOpportunity = opportunity;

    this.viewSalesOpportunityComponentRef = this.viewSalesOpportunityContainer.createComponent(ViewSalesOpportunityComponent);

    this.viewSalesOpportunityComponentRef.instance.salesOpportunityData = this.selectedOpportunity;

    this.viewSalesOpportunityComponentRef.instance.visible = true;
  }

  deleteSalesOpportunity(index: number) {
    this.salesOpportunityService.deleteSalesOpportunity(index)
  }
}

