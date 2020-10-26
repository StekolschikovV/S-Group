import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../../auth/services/auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // const token = this.authService.response.value ? this.authService.response.value.access_token : ''
    // console.log('-----!!!:', token)

    const token = this.authService.token || ''
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdC5zLWdyb3VwLnZuLnVhXC9hcGlcL3YxXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwMzcxMzIwMiwiZXhwIjoxNjAzNzk5NjAyLCJuYmYiOjE2MDM3MTMyMDIsImp0aSI6IktHbjZDc2NEZjE2bHR5Z1kiLCJzdWIiOjcsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.emLF-HuHzFRwlTzY_w6z_NPZszv92FBHHs3-oZap10Y'

    console.log('------', token)
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(request)
  }
}
