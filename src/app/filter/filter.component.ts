import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { ActiveFilter } from '../app.types';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() activeFilter: ActiveFilter = 'All';
  @Output() filterTodos = new EventEmitter<ActiveFilter>();

  changeFilter(filter: ActiveFilter): void {
    this.filterTodos.emit(filter);
  }
}
