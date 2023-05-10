import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroCadComponent } from './carro-cad.component';

describe('CarroCadComponent', () => {
  let component: CarroCadComponent;
  let fixture: ComponentFixture<CarroCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroCadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});