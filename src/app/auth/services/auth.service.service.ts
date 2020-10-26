import {Injectable} from '@angular/core';
import {LoginResponseInterface} from "../types/loginResponse.interface";
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {BackendErrorsInterface} from "../../shared/types/backendErrors.interface";
import {BehaviorSubject, Subject} from "rxjs";
import {LoginRequestInterface} from "../types/loginRequest.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  errors = new Subject<BackendErrorsInterface>()
  response = new BehaviorSubject<LoginResponseInterface>(null)

  constructor(private http: HttpClient) {
  }

  // clearData() {
  //   this.errors = null
  //   this.response = null
  // }

  login(dataIn: LoginRequestInterface) {
    const url = environment.baseUrl + 'auth/login'
    return this.http
      .post(url, dataIn)
      .subscribe(
        (dataR: LoginResponseInterface) => {
          this.response.next(dataR)
        },
        (err: BackendErrorsInterface) => this.errors.next(err)
      )

  }

  refresh(): void {

  }

  logout(): void {
  }
}
