import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RecetaService } from '../receta-service.service';
import { Router } from '@angular/router';
import { Ingrediente } from '../interfaces/ingrediente';

@Component({
  selector: 'app-receta-new',
  templateUrl: './receta-new.component.html',
  styleUrls: ['./receta-new.component.css']
})
export class RecetaNewComponent implements OnInit {

  form: FormGroup;
  error = false;
  unidades;
  alergenos;
  constructor(private service: RecetaService, private builder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      nombre: ['',[Validators.required, Validators.minLength(2)]],
      comensales: ['4', [Validators.required]],
      pasos: ['', [Validators.required]],
      alergenos: [''],
      imagen: [''],
      favorito: ['false'],
      ingredientes: this.builder.array([])
    });
    this.unidades = this.service.getUnidades();
    this.alergenos = this.service.getAlergenos();
    this.addIngrediente();
  }

  nuevaReceta() {
    //alert(this.form.get('ingredientes').value[0].nombre +" "+ this.form.get('ingredientes').value[0].cantidad +" "+ this.form.get('ingredientes').value[0].unidad);
    if (this.form.valid) {
      const recetaNueva = {
        id: this.service.getNextId(),
        nombre: this.form.get('nombre').value,
        comensales: this.form.get('comensales').value,
        pasos: this.form.get('pasos').value,
        alergenos: this.form.get('alergenos').value,
        imagen: this.form.get('imagen').value,
        favorito: this.form.get('favorito').value,
        ingredientes: this.form.get('ingredientes').value

      };
      this.service.addReceta(recetaNueva);
      this.form.reset();
      this.router.navigate(['recetas']);
    } else {
      this.error = true;
    }
  }

  volver() {
    this.form.reset();
    this.router.navigate(['recetas']);
  }

  addIngrediente(){
    const ingrediente =  this.builder.group({
      nombre: [''],
      cantidad: [''],
      unidad: ['']
    });
    this.ingFormArray.push(ingrediente);

  }

  deleteIngrediente(id: number) {
	  this.ingFormArray.removeAt(id);
  }

  get ingFormArray(): FormArray{
	  return this.form.controls.ingredientes as FormArray;
  }
}
