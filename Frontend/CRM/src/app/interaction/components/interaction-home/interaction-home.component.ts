import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { InteractionService } from '../../services/interaction.service';
import $, { data } from 'jquery';
import 'datatables.net';
import { EditInteractionComponent } from '../edit-interaction/edit-interaction.component';
import { AddInteractionComponent } from '../add-interaction/add-interaction.component';
import { ViewInteractionComponent } from '../view-interaction/view-interaction.component';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';

export interface IInteraction {
  id: number;
  customer: string;
  handledBy: { name: string };
  type: string;
  date: string;
  notes?: string;
  followUpDate: string;
  createdAt?: string;
}

@Component({
  selector: 'app-interaction-home',
  standalone: false,
  templateUrl: './interaction-home.component.html',
  styleUrl: './interaction-home.component.css',
})
export class InteractionHomeComponent {
  interactions: IInteraction[] = [];
  selectedInteraction: any;

  constructor(private interactionService: InteractionService, private swal: SweetAlertService) {}

  ngOnInit() {
    // this.interactionService.getInteractions().subscribe((data: any) => {
    //   // console.log('API Response:', data);
    //   this.interactions = data;
    //  
    // })
   this.interactionService.interaction$.subscribe((data: any) => {
    this.interactions = data;
    console.log(data);
    setTimeout(() => {
          $('#example').DataTable();
      }, 100);
    
   })
  }

  @ViewChild('editInteraction', { read: ViewContainerRef })
  editInteractionContainer!: ViewContainerRef;
  private editInteractionComponentRef!: ComponentRef<EditInteractionComponent>;

  @ViewChild('addInteraction', { read: ViewContainerRef })
  addInteractionContainer!: ViewContainerRef;
  private addInteractionComponentRef!: ComponentRef<AddInteractionComponent>;

  @ViewChild('viewInteraction', { read: ViewContainerRef })
  viewInteractionContainer!: ViewContainerRef;
  private viewInteractionComponentRef!: ComponentRef<ViewInteractionComponent>;

  showEditInteraction(interaction: any, index: number) {
    this.editInteractionContainer.clear(); // Clear previous instances if any

    this.selectedInteraction = { interaction, index }; // Assign the selected customer

    // Dynamically create and inject the child component
    this.editInteractionComponentRef =
      this.editInteractionContainer.createComponent(EditInteractionComponent);

    // Pass the selected customer data to the child component
    this.editInteractionComponentRef.instance.interactionData =
      this.selectedInteraction.interaction;
    this.editInteractionComponentRef.instance.interactionIndex =
      this.selectedInteraction.index; // `@Input()` in EditCustomerComponent

    // Make the dialog visible
    this.editInteractionComponentRef.instance.visible = true;
  }

  deleteInteraction(index: number) {
    this.interactionService.deleteInteraction(index).subscribe(() => {console.log("deleted")});
    this.swal.showToast('Interaction Deleted Successfully.', 'success')
  }

  showAddInteraction() {
    this.addInteractionContainer.clear();
    this.addInteractionComponentRef =
      this.addInteractionContainer.createComponent(AddInteractionComponent);
    this.addInteractionComponentRef.instance.visible = true;
  }

  showViewInteraction(interaction: IInteraction){
    this.viewInteractionContainer.clear();

    this.selectedInteraction = interaction;

    this.viewInteractionComponentRef = this.viewInteractionContainer.createComponent(ViewInteractionComponent);

    this.viewInteractionComponentRef.instance.interactionData = this.selectedInteraction;

    this.viewInteractionComponentRef.instance.visible = true;
  }
}
