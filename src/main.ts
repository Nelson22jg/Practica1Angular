import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { DataService } from './app/data.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    HttpClientModule,
    ReactiveFormsModule,
    DataService
  ]
}).catch(err => console.error(err));
