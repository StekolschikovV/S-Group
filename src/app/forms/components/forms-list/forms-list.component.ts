import { Component, OnInit } from '@angular/core';
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit {

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService.get()
  }

}

