import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetaService } from '../services/receta-service.service';
import { Receta } from '../interfaces/receta';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-receta-detail-info',
  templateUrl: './receta-detail-info.component.html',
  styleUrls: ['./receta-detail-info.component.css']
})
export class RecetaDetailInfoComponent implements OnInit {

  form: FormGroup;
  id: number;
  receta: Receta;
  comensalesIniciales: number;
  constructor(private activatedRoute: ActivatedRoute,
              private recetaService: RecetaService,
              private fb: FormBuilder,
              private router: Router) {
    this.crearFormulario();
    this.cargarFormulario();
    this.crearListeners();
    this.comensalesIniciales = this.receta.comensales;
  }

  ngOnInit(): void { }

  crearFormulario(){
    this.form = this.fb.group({
      nombre: ['', []],
      comensales: ['', [Validators.required]],
      pasos: ['', []],
      alergenos: [''],
      imagen: [''],
      favorito: ['false'],
      ingredientes: this.fb.array([])
    });
  }

  cargarFormulario(){
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.receta = this.recetaService.getRecetaById(this.id);
    this.form.reset(this.receta);
  }

  crearListeners() {
    this.form.get('comensales').valueChanges.subscribe( valor => this.actualizarIngredientes(valor));
  }

  get ingredientes() {
    return this.form.get('ingredientes') as FormArray;
  }
  actualizarIngredientes(comensales: number) {
    const razon = comensales / this.comensalesIniciales;
    this.comensalesIniciales = comensales;
    console.log('change: ' + comensales);
    this.receta.ingredientes.map(valor => valor.cantidad = valor.cantidad * razon);
  }

  cambiarFav(){
    this.receta.favorito = !this.receta.favorito;
  }

  guardarCambios(){
    this.receta.comensales = this.form.get('comensales').value;
    this.recetaService.actualizarReceta(this.receta);
    this.router.navigateByUrl('/recetas');
  }
}
