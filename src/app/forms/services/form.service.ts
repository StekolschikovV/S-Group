import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {LoginResponseInterface} from "../../auth/types/loginResponse.interface";
import {LocalStorageInterface} from "../../shared/types/localStorage.interface";
import {BackendErrorsInterface} from "../../shared/types/backendErrors.interface";
import {HttpClient} from "@angular/common/http";
import {FormsResponseInterface} from "../types/formResponse.interface";
import {FormsRequestInterface} from "../types/formsRequest.interface";
import {FormsListDataInterface} from "../types/formsListData.interface";
import {FormsListMetaInterface} from "../types/formsListMeta.interface";
import {AuthService} from "../../auth/services/auth.service";
import {FormFieldsInterface} from "../types/formFields.interface";

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
  formFields: FormFieldsInterface = null

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  get() {
    if (this.authService.token) {
      this.getData()
      this.getFormFields()
    }
  }

  pagination(pageNum: number) {
    this.getPrams.page = pageNum
    this.get()
  }

  getData() {
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

  getFormFields() {
    const url = environment.baseUrl + 'form_fields'
    this.http
      .get(url)
      .subscribe(
        (dataR: FormFieldsInterface) => {
          this.formFields = dataR
        }
      )
  }
}
