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
import { TitleComponent } from './contracts/title/title.component';
import { ControlsComponent } from './contracts/controls/controls.component';
import { SearchBarComponent } from './contracts/controls/search-bar/search-bar.component';
import { SearchComponent } from './assets/svg/search/search.component';
import { GenericButtonComponent } from './generic-button/generic-button.component';
import { FilterComponent } from './assets/svg/filter/filter.component';
import { SvgLoaderComponent } from './assets/svg/svg-loader/svg-loader.component';
import { AddComponent } from './assets/svg/add/add.component';
import { GenericDropdownComponent } from './generic-dropdown/generic-dropdown.component';
import { TableComponent } from './contracts/table/table.component';
import { THeadComponent } from './contracts/table/t-head/t-head.component';
import { TRowComponent } from './contracts/table/t-row/t-row.component';
import { ContractsIconComponent } from './assets/svg/contracts-icon/contracts-icon.component';
import { DocumentIconComponent } from './assets/svg/document-icon/document-icon.component';
import { PayoutIconComponent } from './assets/svg/payout-icon/payout-icon.component';
import { TimeIconComponent } from './assets/svg/time-icon/time-icon.component';
import { GenericLabelComponent } from './generic-label/generic-label.component';
import { DotIconComponent } from './assets/svg/dot-icon/dot-icon.component';

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
    TitleComponent,
    ControlsComponent,
    SearchBarComponent,
    SearchComponent,
    GenericButtonComponent,
    FilterComponent,
    SvgLoaderComponent,
    AddComponent,
    GenericDropdownComponent,
    TableComponent,
    THeadComponent,
    TRowComponent,
    ContractsIconComponent,
    DocumentIconComponent,
    PayoutIconComponent,
    TimeIconComponent,
    GenericLabelComponent,
    DotIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
