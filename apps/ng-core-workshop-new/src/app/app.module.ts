import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../../libs/material/src/index';
import { HomeModule } from './home/home.module';
import { CustomersModule } from './customers/customers.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HomeModule,
    ProjectsModule,
    CustomersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
