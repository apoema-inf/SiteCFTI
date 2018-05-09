import { Injectable } from '@angular/core';
import {  Categoria, CATEGORIAS } from './categoria.model'

@Injectable()
export class CategoriasService {

  categorias : Categoria[];
  getCategorias() {
    return this.categorias = CATEGORIAS;
  }

}
