import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Receta } from '../interfaces/receta';

@Component({
  selector: 'app-receta-detail',
  templateUrl: './receta-detail.component.html',
  styleUrls: ['./receta-detail.component.css']
})
export class RecetaDetailComponent implements OnInit {

  @Input() receta: Receta;

  @Input() num: number;

  @Output() selectedReceta = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.selectedReceta.emit(this.receta);
  }

}
