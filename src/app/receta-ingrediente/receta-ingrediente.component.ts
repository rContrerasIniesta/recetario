import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receta-ingrediente',
  templateUrl: './receta-ingrediente.component.html',
  styleUrls: ['./receta-ingrediente.component.css']
})
export class RecetaIngredienteComponent implements OnInit {
  @Input() ingrediente;
  constructor() { }

  ngOnInit(): void {
  }

}
