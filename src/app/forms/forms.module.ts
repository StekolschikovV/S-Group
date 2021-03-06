import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {AppModule} from "../app.module";
import {BackendErrorsComponent} from "../shared/components/backend-errors/backend-errors.component";
import {FormsListComponent} from "./components/forms-list/forms-list.component";
import {LoginGuard} from "../shared/services/loginGuard.service";


const routes = [
  {
    path: 'forms-list',
    component: FormsListComponent,
   canActivate: [LoginGuard]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  declarations: [FormsListComponent],
  providers: []
})
export class FormsModule {}
