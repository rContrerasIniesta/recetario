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
  alergenosSelected: any[] = [];

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
        alergenos: this.alergenosSelected,
        imagen: this.form.get('imagen').value,
        favorito: this.form.get('favorito').value,
        ingredientes: this.form.get('ingredientes').value

      };
      this.service.addReceta(recetaNueva);
      this.form.reset();
      this.router.navigate(['recetas']);
    } else {
      Object.values(this.form.controls).forEach( control => {
        if (control instanceof FormArray){
          Object.values(control.controls).forEach( con => con.markAsTouched());
        } else{
          control.markAsTouched();
        }
      });
      this.error = true;
    }
  }

  volver() {
    this.form.reset();
    this.router.navigate(['recetas']);
  }

  aniadirIngrediente(){
    const ingrediente =  this.fb.group({
      nombre: ['', Validators.required],
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

  aniadirAlergeno(){
    const seleccionado = this.form.get('alergenos').value;
    if (this.alergenosSelected.find( alergeno => seleccionado === alergeno)){
      return;
    }

    this.alergenosSelected.push(seleccionado);
  }

  get nombreNoValido(){
    return this.form.get('nombre').invalid && this.form.get('nombre').touched;
  }

  get pasosNoValido(){
    return this.form.get('pasos').invalid && this.form.get('pasos').touched;
  }

  get comensalesNoValido(){
    return (this.form.get('comensales').value > 0) ? false : true;
  }

  get ingredienteNoValido(){
    return this.form.get('ingredientes').invalid && this.form.get('ingredientes').touched;
  }
}
