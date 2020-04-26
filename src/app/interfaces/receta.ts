import { Ingrediente } from './ingrediente';

export interface Receta {
  id: number;
  nombre: string;
  comensales: number;
  pasos: string;
  alergenos: string[];
  imagen: string;
  favorito: boolean;
  ingredientes: Ingrediente[];
}
