import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { StorageService } from './app/storage.service';

bootstrapApplication(AppComponent, {
  providers: [StorageService]
});
