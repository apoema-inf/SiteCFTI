import { SubcategoriasService } from './subcategorias.service';
import { NgModule } from "@angular/core";
import {CursosComponent} from "./cursos.component";
import { CommonModule } from "@angular/common";
import { DesenvolvimentoComponent } from './desenvolvimento/desenvolvimento.component';
import { MaterializeModule } from 'angular2-materialize';
import { CursosService } from "./cursos.service";
import { CategoriasService } from "./categorias.service";

@NgModule({
    imports: [CommonModule, MaterializeModule],
    exports: [],
    declarations: [CursosComponent, DesenvolvimentoComponent],
    providers: [CursosService, CategoriasService, SubcategoriasService]
})

export class CursosModule {}