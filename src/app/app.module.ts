import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events.component';
import { EventComponent } from './event.component';
import { reducer } from './store'

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
