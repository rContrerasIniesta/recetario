import { Ingrediente } from './ingrediente';

export interface Receta {
  id: number,
  nombre: String;
  comensales: Number;
  pasos: String;
  alergenos: String[];
  imagen: String;
  favorito: boolean;
  ingredientes: Ingrediente[];
}
