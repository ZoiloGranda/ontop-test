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
import { GenericActionsListComponent } from './generic-actions-list/generic-actions-list.component';
import { EditIconComponent } from './assets/svg/edit-icon/edit-icon.component';
import { SignIconComponent } from './assets/svg/sign-icon/sign-icon.component';
import { DeleteIconComponent } from './assets/svg/delete-icon/delete-icon.component';
import { ThreeDotsIconComponent } from './assets/svg/three-dots-icon/three-dots-icon.component';
import { ThreeBarsIconComponent } from './assets/svg/three-bars-icon/three-bars-icon.component';
import { MobileTableComponent } from './contracts/mobile-table/mobile-table.component';
import { MobileTableRowComponent } from './contracts/mobile-table/mobile-table-row/mobile-table-row.component';
import { MessageComponent } from './contracts/message/message.component';
import { MessageIconComponent } from './assets/svg/message-icon/message-icon.component';

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
    DotIconComponent,
    GenericActionsListComponent,
    EditIconComponent,
    SignIconComponent,
    DeleteIconComponent,
    ThreeDotsIconComponent,
    ThreeBarsIconComponent,
    MobileTableComponent,
    MobileTableRowComponent,
    MessageComponent,
    MessageIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
