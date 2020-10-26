import {Injectable} from '@angular/core';
import {LoginResponseInterface} from "../types/loginResponse.interface";
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {BackendErrorsInterface} from "../../shared/types/backendErrors.interface";
import {BehaviorSubject, Subject} from "rxjs";
import {LoginRequestInterface} from "../types/loginRequest.interface";
import {LocalStorageInterface} from "../../shared/types/localStorage.interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  errors = new Subject<BackendErrorsInterface>()
  response = new BehaviorSubject<LoginResponseInterface>(null)
  token: string

  constructor(private http: HttpClient, private router: Router) {
    this.refresh()
  }

  public login(dataIn: LoginRequestInterface): void {
    const url = environment.baseUrl + 'auth/login'
    this.http
      .post(url, dataIn)
      .subscribe(
        (dataR: LoginResponseInterface) => {
          this.response.next(dataR)
          localStorage.setItem(LocalStorageInterface.token, JSON.stringify(dataR.access_token))
          this.token = dataR.access_token
        },
        (err: BackendErrorsInterface) => this.errors.next(err)
      )
  }

  private refresh(): void {
    this.token = JSON.parse(localStorage.getItem(LocalStorageInterface.token)) || null

    // console.log('refresh', this.token)
    // const url = environment.baseUrl + 'auth/refresh'
    // this.http
    //   .post(url, {})
    //   .subscribe(
    //     (dataR: LoginResponseInterface) => {
    //       console.log('!!!!!!!!!!!!!', dataR)
    //     }
    //
    //   )

  }

  public logout(): void {
    const url = environment.baseUrl + 'auth/logout'
    this.http
      .post(url, {})
      .subscribe(
        (dataR: LoginResponseInterface) => {

        }
      )

    this.response.next(null)
    this.token = null
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
