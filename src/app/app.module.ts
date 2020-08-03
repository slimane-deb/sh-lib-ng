import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import {MenuService} from './common/services/menu.service';
import {HttpClientModule} from '@angular/common/http';
import {DailyDrillingModule} from './core/daily-drilling/daily-drilling.module';
import { BaseFormComponent } from './shared/components/base-form/base-form.component';
import {CustomFormModule} from 'custom-form';

@NgModule({
  declarations: [
    AppComponent,
    BaseFormComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
    HttpClientModule,
    DailyDrillingModule,
    CustomFormModule
  ],
  providers: [AuthService, ScreenService, AppInfoService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
