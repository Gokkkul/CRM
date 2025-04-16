import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  private searchSubject = new Subject<string>(); // Subject to handle search input
  @Output() search = new EventEmitter<string>(); // Emits the final search term

  constructor() {}

  ngOnInit(): void {
    // Apply debouncing and filter unique values before emitting
    this.searchSubject.pipe(
      debounceTime(300),           // Waits for 300ms between keystrokes
      distinctUntilChanged()       // Avoids duplicate consecutive values
    ).subscribe((keyword: string) => {
      this.search.emit(keyword);  // Emits the search keyword to the parent component
    });
  }

  onSearchInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value; // Extract input value
    this.searchSubject.next(inputValue); // Push the value to the Subject
  }
}
