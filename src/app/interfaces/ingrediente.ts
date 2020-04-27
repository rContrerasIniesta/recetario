export interface Ingrediente {
  nombre: string;
  cantidad: number;
  unidad: string;
}

export const unidades = [
  {name: 'gramos', displayName: 'gramos'},
  {name: 'litros', displayName: 'litros'},
  {name: 'cucharadas', displayName: 'cucharadas'}
];

export const alergenos = [
  {name: 'lacteos', displayName: 'lacteos'},
  {name: 'gluten', displayName: 'gluten'},
  {name: 'marisco', displayName: 'marisco'},
  {name: 'frutos secos', displayName: 'frutos secos'}
];
