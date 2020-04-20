export interface Ingrediente {
  nombre: String;
  cantidad: Number;
  unidad: String;
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
  {name: 'no tiene', displayName: 'no tiene'}
];
