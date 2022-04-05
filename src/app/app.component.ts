import { Component, VERSION } from '@angular/core';
import { FetchData } from './services/fetchData.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private getService: FetchData) {}

  name = 'Angular ' + this.getService.getVerison();
}
