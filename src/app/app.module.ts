import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { HighlightDirective } from './highlight.directive';
import { StorageService } from './storage.service';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    SearchComponent,
    HighlightDirective,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
