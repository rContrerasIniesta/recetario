import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RecetaService } from '../services/receta-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receta-new',
  templateUrl: './receta-new.component.html',
  styleUrls: ['./receta-new.component.css']
})
export class RecetaNewComponent implements OnInit {

  form: FormGroup;
  error = false;
  unidades: any[] = [];
  alergenos: any[] = [];

  constructor(private service: RecetaService, private fb: FormBuilder, private router: Router) {
    this.crearFormulario();
    this.cargarCombos();
  }

  ngOnInit(): void { }

  crearFormulario(){
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      comensales: ['4', [Validators.required]],
      pasos: ['', [Validators.required]],
      alergenos: [''],
      imagen: [''],
      favorito: ['false'],
      ingredientes: this.fb.array([])
    });
  }

  cargarCombos(){
    this.unidades = this.service.getUnidades();
    this.alergenos = this.service.getAlergenos();
  }

  nuevaReceta() {

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

  aniadirIngrediente(){
    const ingrediente =  this.fb.group({
      nombre: '',
      cantidad: '',
      unidad: ''
    });
    this.ingredientes.push(ingrediente);

  }

  borrarIngrediente(id: number) {
    this.ingredientes.removeAt(id);
  }

  get ingredientes() {
    return this.form.get('ingredientes') as FormArray;
  }

}
