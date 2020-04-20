import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaNewComponent } from './receta-new.component';

describe('RecetaNewComponent', () => {
  let component: RecetaNewComponent;
  let fixture: ComponentFixture<RecetaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
