import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { ItemComponent } from './header/item/item.component';
import { ProfileComponent } from './header/profile/profile.component';
import { ArrowComponent } from './assets/svg/arrow/arrow.component';
import { BodyWrapperComponent } from './body-wrapper/body-wrapper.component';
import { ContractsComponent } from './contracts/contracts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    ItemComponent,
    ProfileComponent,
    ArrowComponent,
    BodyWrapperComponent,
    ContractsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
