import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaDetailInfoComponent } from './receta-detail-info.component';

describe('RecetaDetailInfoComponent', () => {
  let component: RecetaDetailInfoComponent;
  let fixture: ComponentFixture<RecetaDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
