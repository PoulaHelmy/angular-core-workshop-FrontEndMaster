import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular-core-workplace-new/material';
import { HomeModule } from './home/home.module';
import { CustomersModule } from './customers/customers.module';
import { ProjectsModule } from './projects/projects.module';
import { UiLoginModule } from '@angular-core-workplace-new/ui-login';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    HomeModule,
    ProjectsModule,
    CustomersModule,
    UiLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
