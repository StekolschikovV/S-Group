import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthModule} from "./auth/auth.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "./forms/forms.module";
import {AuthInterceptor} from "./shared/services/authInterceptor.service";
// import { BackendErrorsComponent } from './shared/components/backend-errors/backend-errors.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
