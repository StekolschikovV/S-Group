import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorsInterface} from "../../types/backendErrors.interface";

@Component({
  selector: 'app-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.scss']
})
export class BackendErrorsComponent implements OnInit {

  // @Input('backendErrors') backendErrorsProps: BackendErrorsInterface


  constructor() { }

  ngOnInit() {
  }

}
