import { Component, OnInit } from '@angular/core';
import { PercentualObesosPorGeneroService } from './percentual-obesos-por-genero.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-percentual-obesos-por-genero',
  templateUrl: './percentual-obesos-por-genero.component.html',
  styleUrls: ['./percentual-obesos-por-genero.component.css']
})
export class PercentualObesosPorGeneroComponent implements OnInit {
  [x: string]: any;
  data: any[] = [];
  dataLoaded: boolean = false;

  constructor(private percentualObesosPorGeneroService: PercentualObesosPorGeneroService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.percentualObesosPorGeneroService.buscarPercentualObesosPorGenero()
      .subscribe(
        response => {
          this.data = response.map(item => ({
            name: item.genero,
            value: item.percentual
          }));
          this.dataLoaded = true;
        },
        error => {
          console.error('Erro ao buscar percentual de obesos por gênero', error);
        }
      );
  }
}
