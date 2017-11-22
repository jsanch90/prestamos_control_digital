import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { AdministracionPage } from '../pages/administracion/administracion';
import { LoginServicesProvider } from '../providers/login-services/login-services';
import { ProviderSettingsProvider } from '../providers/provider-settings/provider-settings';
import { Http } from '@angular/http/src/http';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    AdministracionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    AdministracionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServicesProvider,
    ProviderSettingsProvider
  ]
})
export class AppModule {}
