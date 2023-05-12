import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './core/login/login.component';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/material/material.module";
import {DashboardComponent} from './feature/dashboard/dashboard.component';
import {
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthServiceConfig,
  SocialLoginModule
} from "@abacritt/angularx-social-login";
import {CookieService} from "ngx-cookie-service";
import {RouterModule} from "@angular/router";
import {AuthService} from "./shared/auth.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    AuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '268872756140-3i76h9iigna3vvfhkj27kvens8o3f2ei.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
