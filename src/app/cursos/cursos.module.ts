import { SubcategoriasService } from '../service/subcategorias.service';
import { NgModule } from "@angular/core";
import {CursosComponent} from "./cursos.component";
import { CommonModule } from "@angular/common";
import { DesenvolvimentoComponent } from './desenvolvimento/desenvolvimento.component';
import { MaterializeModule } from 'angular2-materialize';
import { CursosService } from "../service/cursos.service";
import { CategoriasService } from "../service/categorias.service";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, MaterializeModule, FormsModule],
    exports: [],
    declarations: [CursosComponent, DesenvolvimentoComponent],
    providers: [CursosService, CategoriasService, SubcategoriasService]
})

export class CursosModule {}