import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {LoginResponseInterface} from "../../auth/types/loginResponse.interface";
import {LocalStorageInterface} from "../../shared/types/localStorage.interface";
import {BackendErrorsInterface} from "../../shared/types/backendErrors.interface";
import {HttpClient} from "@angular/common/http";
import { FormsResponseInterface} from "../types/formResponse.interface";
import {FormsRequestInterface} from "../types/formsRequest.interface";
import {FormsListDataInterface} from "../types/formsListData.interface";
import {FormsListMetaInterface} from "../types/formsListMeta.interface";

@Injectable({
  providedIn: 'root'
})
export class FormService {


  data: FormsListDataInterface = null
  meta: FormsListMetaInterface = null
  getPrams: FormsRequestInterface = {
    page: 1,
    per_page: 10,
    order_by: 'id',
    order_direction: 'asc'
  }

  constructor(private http: HttpClient) {

  }


  get() {
    const url = environment.baseUrl + 'forms'

    this.http
      .get(url, {
        // @ts-ignore
        params: this.getPrams
      })
      .subscribe(
        (dataR: FormsResponseInterface) => {
          this.data = dataR.data
          this.meta = dataR.meta
        }
      )
  }

  pagination(pageNum: number) {
    console.log("pagination")
    this.getPrams.page = pageNum
    this.get()
  }
}
