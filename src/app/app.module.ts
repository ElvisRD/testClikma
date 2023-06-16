import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AppComponent } from './app.component';

//components primeng
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    NgbModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    DialogModule,
    ProgressSpinnerModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
