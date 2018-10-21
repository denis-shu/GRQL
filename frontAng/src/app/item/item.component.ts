import { Component, OnInit, Input } from '@angular/core';
import {Report} from '../models/types';
import {ReportService} from '../report.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() report: Report;

  constructor(private reportService: ReportService) { }

  ngOnInit() {
  }

  upvote(id: String) {
    this.reportService.upvoteReport(id)
    .subscribe(data => {
      console.log('+', data);
    }, err => {
      console.log('err+', err);
    });
  }

  downvote(id: String) {
    this.reportService.downvoteReport(id)
    .subscribe(data => {
      console.log('-', data);
    }, err => {
      console.log('err-', err);
    });
  }
}
