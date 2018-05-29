import { SubcategoriasService } from './subcategorias.service';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria.model';
import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './curso.model';
import { Subcategoria } from './subcategoria.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{

  cursos : Curso[];
  curso;
  categorias : Categoria[];
  subcategorias : Subcategoria[];

  constructor(private cursoservice:CursosService, private categoriasservice:CategoriasService, private subcategoriasservice:SubcategoriasService) {}

  ngOnInit() {
    (<any>$('.collapsible')).collapsible();
    this.cursos = this.cursoservice.getCursos();
    this.categorias = this.categoriasservice.getCategorias();
    this.subcategorias = this.subcategoriasservice.getSubcategorias();
  }

  findCurso(curso) {
    document.getElementById("parte-curso").style.display = 'block';
    this.curso = curso;
    document.getElementById("conteudo").innerHTML = this.curso.conteudoProgramatico;
    document.getElementById("publico").innerHTML = this.curso.publicoAlvo;
    document.getElementById("competencias").innerHTML = this.curso.competenciasDesenvolver;
  }

}
