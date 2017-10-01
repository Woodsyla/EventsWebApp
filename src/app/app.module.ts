import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events.component';
import { EventComponent } from './event.component';
import { SortableHeaderComponent } from './sortableHeader.component';
import { reducer } from './store'

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent,
    SortableHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
