import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { StorageService } from './storage.service';
import type { Todo, ActiveFilter } from './app.types';
import type { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(@Inject(StorageService) private readonly storageService: StorageService) {}

  readonly title = 'Задачи';
  readonly highlightColor = 'yellow';
  readonly storageKey = 'todos';
  readonly defaultTodos = [
    { id: 1, description: 'Завтрак', done: true },
    { id: 2, description: 'Уборка', done: false },
    { id: 3, description: 'Купить носки', done: false },
    { id: 4, description: 'Почитать', done: false },
  ];

  todos: Todo[] = [];
  allTodos: Todo[] = [];
  activeFilter: ActiveFilter = 'All';

  ngOnInit(): void {
    const savedTodos = this.storageService.getItem(this.storageKey);
    this.todos = savedTodos ? JSON.parse(savedTodos) : this.defaultTodos;
    this.allTodos = this.todos;
    this.#saveTodos();
  }

  ngDoCheck(): void {
    this.#saveTodos();
  }

  ngOnDestroy(): void {
    this.#saveTodos();
  }

  showTodo = (todo: Todo): boolean => {
    if (this.activeFilter === 'Done') {
      return todo.done;
    } else if (this.activeFilter === 'Undone') {
      return !todo.done;
    } else return true;
  }

  toggleTodo = (id: number) => {
    this.todos = this.todos.map(todo => todo.id === id ? ({ ...todo, done: !todo.done }) : todo);
  }

  filterTodos = (filter: ActiveFilter) => {
    this.activeFilter = filter;
  }

  searchTodos = (condition: string) => {
    this.todos = this.allTodos.filter(todo => todo.description.includes(condition));
  }

  #saveTodos = (): void => {
    this.storageService.setItem(this.storageKey, JSON.stringify(this.todos));
  }
}
