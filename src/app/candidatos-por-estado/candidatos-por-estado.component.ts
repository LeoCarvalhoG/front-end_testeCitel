import { Component, OnInit } from '@angular/core';
import { CandidatosPorEstadoService } from './candidatos-por-estado.service';

@Component({
  selector: 'app-candidatos-por-estado',
  templateUrl: './candidatos-por-estado.component.html',
  styleUrls: ['./candidatos-por-estado.component.css']
})
export class CandidatosPorEstadoComponent implements OnInit {
  
  candidatosPorEstado: { estado: string, quantidade: number }[] = [];
  dados: { estado: string; quantidade: number; }[];

  constructor(private candidatosPorEstadoService: CandidatosPorEstadoService) {} 

  ngOnInit(): void {
    this.buscarCandidatosPorEstado();
  }

  buscarCandidatosPorEstado(): void {
    this.candidatosPorEstadoService.buscarCandidatosPorEstado().subscribe(
      (data) => {
        this.candidatosPorEstado = data;
        console.log('Candidatos por Estado:', this.candidatosPorEstado);
      },
      (error) => {
        console.error('Erro ao buscar candidatos por estado:', error);
      }
    );
  }
}
