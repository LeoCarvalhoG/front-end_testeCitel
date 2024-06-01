import { ComponentFixture, TestBed } from '@angular/core/testing';
import 'zone.js';
import { GraficoIMCMedioComponent } from './grafico-imc-medio.component';

describe('GraficoImcMedioComponent', () => {
  let component: GraficoIMCMedioComponent;
  let fixture: ComponentFixture<GraficoIMCMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoIMCMedioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficoIMCMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
