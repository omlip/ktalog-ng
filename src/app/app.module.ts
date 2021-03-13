import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemService } from './services/item.services';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddItemComponent } from './add-item/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    AuthRoutingModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
