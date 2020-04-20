import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaIngredienteComponent } from './receta-ingrediente.component';

describe('RecetaIngredienteComponent', () => {
  let component: RecetaIngredienteComponent;
  let fixture: ComponentFixture<RecetaIngredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaIngredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
