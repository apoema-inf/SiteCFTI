import { Component, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: `./app.component.html`
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
