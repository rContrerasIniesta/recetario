import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from '../services/receta-service.service';
import { Receta } from '../interfaces/receta';

@Component({
  selector: 'app-receta-detail-info',
  templateUrl: './receta-detail-info.component.html',
  styleUrls: ['./receta-detail-info.component.css']
})
export class RecetaDetailInfoComponent implements OnInit {

  id: number;
  receta: Receta;
  constructor(private activatedRoute: ActivatedRoute, private recetaService: RecetaService) { }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.receta = this.recetaService.getRecetaById(this.id);
  }

}
