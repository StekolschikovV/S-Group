import {LoginComponent} from "./components/login/login.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service.service";
import {AppModule} from "../app.module";

const routes = [
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  declarations: [ LoginComponent],
  providers: [AuthService]
})
export class AuthModule {}
