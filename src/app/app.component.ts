import { Component, OnInit } from '@angular/core';
import { IStepOption, TourService } from 'ngx-ui-tour-tui-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tour-app';

  constructor(private tour: TourService) {}

  private tourSteps: IStepOption[] = [
      {
        anchorId: 'start.tour',
        content: 'Hello World',
        title: 'Welcome',
      },
      {
        anchorId: 'mainId',
        content: 'Hello Main',
        title: 'First',
        route: 'component-a'
      },
      
      {
        anchorId: 'bannerId',
        content: 'Hello Banner',
        title: 'Second',
        route: 'component-b'
      }
  ];
  
  ngOnInit() {
    this.tour.initialize(this.tourSteps);
  }

  start() {
    this.tour.start()
  }


}
