import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataBindingEx } from './dataBindingEx/dataBindingEx.component';
import { FetchData } from './services/fetchData.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, DataBindingEx],
  providers: [FetchData],
  bootstrap: [AppComponent],
})
export class AppModule {}
