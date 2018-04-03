import { NgModule } from "@angular/core";
import {CursosComponent} from "./cursos.component";
import { CommonModule } from "@angular/common";
import { DesenvolvimentoComponent } from './desenvolvimento/desenvolvimento.component';
import { GestaoComponent } from './gestao/gestao.component';
import { CursosRoutingModule } from "./cursos.routing.module";
import { MaterializeModule } from 'angular2-materialize';

@NgModule({
    imports: [CommonModule, CursosRoutingModule, MaterializeModule],
    exports: [],
    declarations: [CursosComponent, DesenvolvimentoComponent, GestaoComponent],
    providers: []
})

export class CursosModule {}