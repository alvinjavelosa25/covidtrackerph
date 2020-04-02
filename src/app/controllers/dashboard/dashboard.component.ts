import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TrackerService } from 'src/app/services/tracker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})

export class DashboardComponent implements OnInit {

  byCities: any;

  constructor(
    public trackerService: TrackerService
  ) { }

  async ngOnInit() {
    this.byCities = await this.trackerService.getCity().subscribe(response => {
      return response;
    });
  }


}
