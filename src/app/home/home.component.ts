import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { MaterializeModule } from 'angular2-materialize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  ngOnInit() {
    (<any>$('.slider')).slider();
  }

  today = Date.now();

  calendarOptions: Object = {
    header: {
      right: 'month, agendaWeek, agendaDay',
      center: 'title, ',
      left: 'today, prev, next',
    },
    locale: 'pt',
    buttonText: {
      today: 'Hoje',
      month: 'Mês',
      week: 'Semana',
      day: 'Dia'
    },
    height: 470,
    timeFormat: 'H(:mm)',
    displayEventTime: true,
    nextDayThreshold: true,
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    fixedWeekCount: true,
    defaultDate: this.today,
    selectable: true,
    weekNumbersWithinDays: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2018-03-02'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2018-03-03'
      },
      {
        title: 'Gestão da Continuidade de Negócios – Brasília (DF) – Integral',
        start: '2018-03-05T00:30:00',
        end: '2018-03-10T12:30:00'
      }
    ]
  };

}
