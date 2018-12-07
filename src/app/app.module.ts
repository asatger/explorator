import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { ChecklistPage } from '../pages/checklist/checklist';
import { EnvironmentPage } from '../pages/environment/environment';
import { CockpitPage } from '../pages/cockpit/cockpit';
import { AlimentationPage } from '../pages/alimentation/alimentation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherPage } from '../pages/weather/weather';
import { AssistancePage } from '../pages/assistance/assistance';

import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ChecklistPage,
    EnvironmentPage,
    CockpitPage,
    AlimentationPage,
    WeatherPage,
    AssistancePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ChecklistPage,
    EnvironmentPage,
    CockpitPage,
    AlimentationPage,
    WeatherPage,
    AssistancePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
