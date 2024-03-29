import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { NgOptimizedImage } from '@angular/common';
import {DiscoverPageModule} from './pages/discover/discover.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Keyboard } from '@capacitor/keyboard';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// @ts-ignore
@NgModule({
  declarations: [AppComponent, ViewDetailsComponent], // Ajoutez ViewDetailsComponent ici
    imports: [BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        NgOptimizedImage,
        DiscoverPageModule,
        IonicStorageModule.forRoot()
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
    constructor() {
        Keyboard.setAccessoryBarVisible({isVisible: false});
    }
}
