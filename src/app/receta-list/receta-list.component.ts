import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../receta-service.service';
import { Receta } from '../interfaces/receta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {

  listaRecetas: Receta[] = this.recetaService.getRecetas();

  listaRecetasFav: Receta[] = this.listaRecetas.filter(receta=>receta.favorito);

  constructor(private recetaService: RecetaService, private router: Router) { }

  ngOnInit(): void {
  }

  selected(receta: Receta) {
    console.log('seleccionado!', receta);
    this.router.navigate(['recetas', receta.id]);
  }
}
