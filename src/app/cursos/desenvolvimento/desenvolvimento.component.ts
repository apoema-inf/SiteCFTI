import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desenvolvimento',
  templateUrl: './desenvolvimento.component.html',
  styleUrls: ['./desenvolvimento.component.scss']
})
export class DesenvolvimentoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (<any>$('ul.tabs')).tabs();
    (<any>$('ul.tabs')).tabs('select_tab', 'tab_id');
  }
}
