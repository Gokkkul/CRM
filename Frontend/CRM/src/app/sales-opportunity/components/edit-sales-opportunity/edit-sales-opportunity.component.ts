import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISalesOpportunity } from '../../../models/model';
import { SalesOpportunityService } from '../../services/sales-opportunity.service';

@Component({
  selector: 'app-edit-sales-opportunity',
  standalone: false,
  templateUrl: './edit-sales-opportunity.component.html',
  styleUrl: './edit-sales-opportunity.component.css'
})
export class EditSalesOpportunityComponent {
  @Input() salesOpportunityData!: ISalesOpportunity;
  @Input() salesOpportunityIndex!: number;
  @Input() customers: { id: number; name: string }[] = []; // List of customers for dropdown

  visible: boolean = false;
  salesOpportunityForm!: FormGroup;

  constructor(private fb: FormBuilder, private salesOpportunityService: SalesOpportunityService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.salesOpportunityForm = this.fb.group({
      stage: [this.salesOpportunityData.stage, Validators.required],
      customer: [this.salesOpportunityData.customer?.id, Validators.required],
      // lead: [this.salesOpportunityData.lead?.id],
      value: [this.salesOpportunityData.value, [Validators.required, Validators.min(0)]],
      expectedCloseDate: [this.salesOpportunityData.expectedCloseDate],
      notes: [this.salesOpportunityData.notes]
    });
  }

  onUpdate() {
    if (this.salesOpportunityForm.valid) {
      const updatedOpportunity = this.salesOpportunityForm.value;
      this.salesOpportunityService.updateSalesOpportunity(updatedOpportunity, this.salesOpportunityIndex)
        .subscribe(() => {
          console.log("Sales opportunity updated successfully!");
          this.visible = false;
        });
    }
  }
}
