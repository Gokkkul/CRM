import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SalesOpportunityService } from '../../services/sales-opportunity.service';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { ViewSalesOpportunityComponent } from '../view-sales-opportunity/view-sales-opportunity.component';
import { ISalesOpportunity } from '../../../models/model';
import { EditSalesOpportunityComponent } from '../edit-sales-opportunity/edit-sales-opportunity.component';
import { AddSalesOpportunityComponent } from '../add-sales-opportunity/add-sales-opportunity.component';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-sales-opportunity-home',
  standalone: false,
  templateUrl: './sales-opportunity-home.component.html',
  styleUrl: './sales-opportunity-home.component.css',
})
export class SalesOpportunityHomeComponent {
  visible = false;
  salesOpportunities: ISalesOpportunity[] = [];
  selectedOpportunity: any;
  filteredsalesOpportunities: ISalesOpportunity[] = [];
  page: number = 1;
  pageSize: number = 5;
  isLoading: boolean = false;

  userRole = 'employee';

  constructor(
    private salesOpportunityService: SalesOpportunityService,
    private swal: SweetAlertService,
    private sharedService: SharedService
  ) {
    sharedService.userRole$.subscribe((role) => {
      this.userRole = role;
    });
  }

  ngOnInit() {

    this.isLoading = true;
    this.salesOpportunityService.salesOpportunity$.subscribe((data: any) => {
      if (data.length) this.isLoading = false;
      this.salesOpportunities = data;
      this.filteredsalesOpportunities = [...this.salesOpportunities];
      console.log(data);

      // setTimeout(() => {
      //   $('#example').DataTable();
      // }, 300);
    });
  }

  handleSearch(keyword: string): void {
    this.filteredsalesOpportunities = this.salesOpportunities.filter(
      (salesOpportunity) =>
        salesOpportunity.stage.toLowerCase().includes(keyword.toLowerCase()) || // Search by name
        salesOpportunity.customer?.name
          .toLowerCase()
          .includes(keyword.toLowerCase()) || // Search by email
        (salesOpportunity.value && salesOpportunity.value === Number(keyword)) || // Exact number match
        (salesOpportunity.value && salesOpportunity.value > Number(keyword)) // Example: Filter values greater than the keyword
    );
  }

  @ViewChild('editSalesOpportunity', { read: ViewContainerRef })
  editSalesOpportunityContainer!: ViewContainerRef;
  private editSalesOpportunityComponentRef!: ComponentRef<EditSalesOpportunityComponent>;

  @ViewChild('addSalesOpportunity', { read: ViewContainerRef })
  addSalesOpportunityContainer!: ViewContainerRef;
  private addSalesOpportunityComponentRef!: ComponentRef<AddSalesOpportunityComponent>;

  @ViewChild('viewSalesOpportunity', { read: ViewContainerRef })
  viewSalesOpportunityContainer!: ViewContainerRef;
  private viewSalesOpportunityComponentRef!: ComponentRef<ViewSalesOpportunityComponent>;

  showEditSalesOpportunity(opportunity: ISalesOpportunity, index: number) {
    this.editSalesOpportunityContainer.clear(); // Clear previous instances if any

    this.selectedOpportunity = { opportunity, index }; // Assign the selected opportunity

    this.editSalesOpportunityComponentRef =
      this.editSalesOpportunityContainer.createComponent(
        EditSalesOpportunityComponent
      );

    this.editSalesOpportunityComponentRef.instance.salesOpportunityData =
      this.selectedOpportunity.opportunity;
    this.editSalesOpportunityComponentRef.instance.salesOpportunityIndex =
      this.selectedOpportunity.index;

    this.editSalesOpportunityComponentRef.instance.visible = true;
  }

  showAddSalesOpportunity() {
    this.addSalesOpportunityContainer.clear();
    this.addSalesOpportunityComponentRef =
      this.addSalesOpportunityContainer.createComponent(
        AddSalesOpportunityComponent
      );
    this.addSalesOpportunityComponentRef.instance.visible = true;
  }

  showViewSalesOpportunity(opportunity: ISalesOpportunity) {
    this.viewSalesOpportunityContainer.clear(); // Clear previous instances if any

    this.selectedOpportunity = opportunity;

    this.viewSalesOpportunityComponentRef =
      this.viewSalesOpportunityContainer.createComponent(
        ViewSalesOpportunityComponent
      );

    this.viewSalesOpportunityComponentRef.instance.salesOpportunityData =
      this.selectedOpportunity;

    this.viewSalesOpportunityComponentRef.instance.visible = true;
  }

  deleteSalesOpportunity(index: number) {
    this.salesOpportunityService.deleteSalesOpportunity(index);
  }
}
