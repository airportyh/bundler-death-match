import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1>',
  styles: [`h1 { background-color: green; }`]
})
export class AppComponent {
  title = 'YEAH';
}