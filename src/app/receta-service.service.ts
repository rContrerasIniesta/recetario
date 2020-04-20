
import { Injectable } from '@angular/core';
import { Receta } from './interfaces/receta';
import { unidades } from './interfaces/ingrediente';
import { alergenos } from './interfaces/ingrediente';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  recetas: Receta[] =
  [
    {id: 1,nombre:'Macarrones', comensales:4, pasos:'cocina pasta y poner tomate', alergenos:['no tiene'], imagen:'no disponible', favorito: true,
      ingredientes:[{nombre:'pasta', cantidad: 300, unidad: 'gramos' }, {nombre:'tomate frito', cantidad: 200, unidad: 'gramos' }] },
    {id: 2,nombre:'Paella', comensales:4, pasos:'Sofreir tomate y poner arroz', alergenos:['marisco'], imagen:'no disponible', favorito:false,
      ingredientes:[{nombre:'arroz', cantidad: 300, unidad: 'gramos' }, {nombre:'tomate', cantidad: 400, unidad: 'gramos' }] }
  ];

  constructor() { }

  getRecetas(){
    return this.recetas;
  }

  getRecetaById(id: number){
    return this.recetas.find(receta=>receta.id===id);
  }

  getUnidades(){
    return unidades;
  }

  getAlergenos(){
    return alergenos;
  }

  addReceta(receta: Receta){
    this.recetas.push(receta);
  }

  getNextId(){
    var numbers = this.recetas.map(receta=>receta.id);
    let maximo = Math.max.apply(null, numbers)
    return maximo + 1;
  }
}


