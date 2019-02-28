import { Injectable } from '@angular/core';
import {  Categoria, CATEGORIAS } from '../models/categoria.model'

@Injectable()
export class CategoriasService {

  categorias : Categoria[];
  getCategorias() {
    return this.categorias = CATEGORIAS;
  }

}
