import { Component, OnInit } from '@angular/core';
import { MediaIdadePorTipoSanguineoService } from './media-idade-por-tipo-sanguineo.service';

@Component({
  selector: 'app-media-idade-por-tipo-sanguineo',
  templateUrl: './media-idade-por-tipo-sanguineo.component.html',
  styleUrls: ['./media-idade-por-tipo-sanguineo.component.css']
})
export class MediaIdadePorTipoSanguineoComponent implements OnInit {
  mediaIdadePorTipoSanguineo: any;
  dados: { tipoSanguineo: string; idadeMedia: number; }[];

  constructor(private mediaIdadePorTipoSanguineoService: MediaIdadePorTipoSanguineoService) { } // Correção no nome do serviço

  ngOnInit(): void {
    this.buscarMediaIdadePorTipoSanguineo();
  }

  buscarMediaIdadePorTipoSanguineo() {
    this.mediaIdadePorTipoSanguineoService.buscarMediaIdadePorTipoSanguineo().subscribe(
      data => {
        this.mediaIdadePorTipoSanguineo = data;
        console.log('Média de idade por tipo sanguíneo:', this.mediaIdadePorTipoSanguineo);
      },
      error => {
        console.error('Erro ao buscar média de idade por tipo sanguíneo:', error);
      }
    );
  }
}
