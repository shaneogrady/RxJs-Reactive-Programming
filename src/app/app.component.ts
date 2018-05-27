import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

console.log('RXJS', Rx);
