import { Injectable } from '@angular/core';
import {  Curso, CURSOS } from '../models/curso.model'

@Injectable()
export class CursosService {

  cursos : Curso[];
  getCursos() {
    return this.cursos = CURSOS;
  }

}
