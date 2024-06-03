import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImcMedioService } from './imc-medio.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafico-imc-medio',
  templateUrl: './grafico-imc-medio.component.html',
  styleUrls: ['./grafico-imc-medio.component.css']
})
export class GraficoIMCMedioComponent implements OnInit {
  @ViewChild('graficoIMCMedio', { static: true }) graficoIMCMedio!: ElementRef<HTMLCanvasElement>; // Referência ao elemento <canvas> do gráfico

  faixasEtarias: string[] = []; 
  imcMedioPorFaixaEtaria: number[] = [];
  grafico: Chart | null = null; 
  dados: { faixaEtaria: string; imcMedio: number; }[];

  constructor(private imcMedioService: ImcMedioService) { }

  ngOnInit(): void {
    this.buscarDadosIMCMedioPorFaixaEtaria();
  }

  buscarDadosIMCMedioPorFaixaEtaria(): void {
    this.imcMedioService.buscarDadosIMCMedioPorFaixaEtaria().subscribe(
      data => {
        this.faixasEtarias = data.faixasEtarias; 
        this.imcMedioPorFaixaEtaria = data.imcMedioPorFaixaEtaria; 
        this.criarGraficoIMCMedio(); 
      },
      error => {
        console.error('Erro ao buscar os dados do IMC médio por faixa etária:', error);
      }
    );
  }

  criarGraficoIMCMedio(): void {
    if (this.grafico) {
      this.grafico.destroy();
    }

    this.grafico = new Chart(this.graficoIMCMedio.nativeElement, {
      type: 'bar', 
      data: {
        labels: this.faixasEtarias, 
        datasets: [{
          label: 'IMC Médio', 
          data: this.imcMedioPorFaixaEtaria, 
          backgroundColor: 'rgba(54, 162, 235, 0.5)', 
          borderColor: 'rgba(54, 162, 235, 1)', 
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
