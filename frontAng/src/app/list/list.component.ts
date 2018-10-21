import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/observable';
import {Report} from '../models/types';
import {ReportService} from '../report.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
