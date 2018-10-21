import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Report } from '../models/types';
import { ReportService } from '../report.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
  @Input()
  searchTerm: String;

  reports: Observable<Report[]>;

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.reports = this.reportService.getAllRepors(this.searchTerm);
  }

  ngOnChanges() {
      this.reports = this.reportService.getAllRepors(this.searchTerm);
  }
}
