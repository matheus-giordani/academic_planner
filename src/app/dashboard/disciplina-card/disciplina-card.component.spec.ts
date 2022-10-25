import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaCardComponent } from './disciplina-card.component';

describe('DisciplinaCardComponent', () => {
  let component: DisciplinaCardComponent;
  let fixture: ComponentFixture<DisciplinaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisciplinaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
