import { Curso } from './../curso.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-desenvolvimento',
  templateUrl: './desenvolvimento.component.html',
  styleUrls: ['./desenvolvimento.component.scss']
})
export class DesenvolvimentoComponent implements OnInit {

  @Input() curso: Curso;


  constructor() { }

  ngOnInit() {
    (<any>$('ul.tabs')).tabs();
    (<any>$('ul.tabs')).tabs('select_tab', 'tab_id');
  }
}
