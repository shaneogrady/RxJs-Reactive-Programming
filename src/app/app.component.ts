import { Component } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  testoutput = '';
}

const observable = Observable.create((observer: any) => {
  observer.next('Hey guys!');
});

observable.subscribe((x: any) => addItem(x));

function addItem(val: any) {
  const textnode = document.createTextNode(val);
  console.log('whoop whoop :', val);
}



