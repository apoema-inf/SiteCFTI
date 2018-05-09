import { Injectable } from '@angular/core';
import {  Subcategoria, SUBCATEGORIAS } from './subcategoria.model'

@Injectable()
export class SubcategoriasService {

  subcategorias : Subcategoria[];
  getSubcategorias() {
    return this.subcategorias = SUBCATEGORIAS;
  }

}
