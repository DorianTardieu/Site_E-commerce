import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartevisiteComponent } from './cartevisite.component';

describe('CvComponent', () => {
  let component: CartevisiteComponent;
  let fixture: ComponentFixture<CartevisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartevisiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartevisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
