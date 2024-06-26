import { ComponentFixture, TestBed } from '@angular/core/testing';
import 'zone.js';
import { CandidatosPorEstadoComponent } from './candidatos-por-estado.component';

describe('CandidatosPorEstadoComponent', () => {
  let component: CandidatosPorEstadoComponent;
  let fixture: ComponentFixture<CandidatosPorEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatosPorEstadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidatosPorEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
