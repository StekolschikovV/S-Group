import {Injectable} from '@angular/core';
import {LoginResponseInterface} from "../types/loginResponse.interface";
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {BackendErrorsInterface} from "../../shared/types/backendErrors.interface";
import {BehaviorSubject, Subject} from "rxjs";
import {LoginRequestInterface} from "../types/loginRequest.interface";
import {LocalStorageInterface} from "../../shared/types/localStorage.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  errors = new Subject<BackendErrorsInterface>()
  response = new BehaviorSubject<LoginResponseInterface>(null)

  constructor(private http: HttpClient) {
  }

  public login(dataIn: LoginRequestInterface): void {
    const url = environment.baseUrl + 'auth/login'
    this.http
      .post(url, dataIn)
      .subscribe(
        (dataR: LoginResponseInterface) => {
          this.response.next(dataR)
          localStorage.setItem(LocalStorageInterface.token, JSON.stringify(dataR.access_token))
        },
        (err: BackendErrorsInterface) => this.errors.next(err)
      )
  }

  private refresh(): void {

  }

  public logout(): void {
  }
}
