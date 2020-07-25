import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import {MenuService} from './common/services/menu.service';
import {HttpClientModule} from '@angular/common/http';
import {ReportModule} from './core/report/report.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
    HttpClientModule,
    ReportModule
  ],
  providers: [AuthService, ScreenService, AppInfoService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
