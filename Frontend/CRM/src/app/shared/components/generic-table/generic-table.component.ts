import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  standalone: false,
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css'
})
export class GenericTableComponent {
  @Input() title: string = '';
  @Input() addButtonLabel: string = 'Add Item';
  @Input() displayedColumns: string[] = [];
  @Input() data: any[] = [];
  // @Input() isLoading: boolean;
  @Input() userRole: string = 'user';

  

  filteredData: any[] = [];
  pageSize: number = 10;
  page: number = 1;
  isLoading: boolean = true;

  ngOnInit() {
    if(this.data.length) this.isLoading = false
    this.filteredData = this.data;
  }

  handleSearch(searchTerm: string) {
    this.filteredData = this.data.filter(item =>
      Object.values(item).some((value: any) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  addNewItem() {
    console.log('Add new item clicked');
  }

  editItem(item: any, index: number) {
    console.log('Edit item:', item);
  }

  deleteItem(index: number) {
    console.log('Delete item at index:', index);
  }

  viewItem(item: any) {
    console.log('View item:', item);
  }
}
