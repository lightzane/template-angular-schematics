import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isHandset: boolean = true;

  constructor(private stateService: StateService) {
    this.stateService.isHandset$.subscribe((breakpointState) => this.isHandset = breakpointState);
  }

}
