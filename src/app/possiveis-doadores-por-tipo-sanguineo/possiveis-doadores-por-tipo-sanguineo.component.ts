import { Component, OnInit } from '@angular/core';
import { PossiveisDoadoresPorTipoSanguineoService } from './possiveis-doadores-por-tipo-sanguineo.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-possiveis-doadores-por-tipo-sanguineo',
  templateUrl: './possiveis-doadores-por-tipo-sanguineo.component.html',
  styleUrls: ['./possiveis-doadores-por-tipo-sanguineo.component.css']
})
export class PossiveisDoadoresPorTipoSanguineoComponent implements OnInit {
  [x: string]: any;
  tiposSanguineos: string[] = [];
  possiveisDoadores: number[] = [];

  constructor(private possiveisDoadoresPorTipoSanguineoService: PossiveisDoadoresPorTipoSanguineoService) { }

  ngOnInit(): void {
    this.possiveisDoadoresPorTipoSanguineoService.buscarPossiveisDoadoresPorTipoSanguineo().subscribe(data => {
      this.tiposSanguineos = data.map((item: any) => item.tipoSanguineo);
      this.possiveisDoadores = data.map((item: any) => item.possiveisDoadores);
      this.createChart();
    });
  }

  createChart(): void {
    const canvas = <HTMLCanvasElement>document.getElementById('doadoresChart');
    if (!canvas) {
      console.error('Elemento canvas não encontrado');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Contexto do canvas não encontrado');
      return;
    }

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.tiposSanguineos,
        datasets: [{
          label: 'Possíveis Doadores',
          data: this.possiveisDoadores,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
