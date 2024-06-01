import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadComponent } from '../upload/upload.component';
import { CandidatosPorEstadoComponent } from '../candidatos-por-estado/candidatos-por-estado.component';
import { GraficoIMCMedioComponent } from '../grafico-imc-medio/grafico-imc-medio.component';
import { PercentualObesosPorGeneroComponent } from '../percentual-obesos-por-genero/percentual-obesos-por-genero.component';
import { PossiveisDoadoresPorTipoSanguineoComponent } from '../possiveis-doadores-por-tipo-sanguineo/possiveis-doadores-por-tipo-sanguineo.component';
import { MediaIdadePorTipoSanguineoComponent } from '../media-idade-por-tipo-sanguineo/media-idade-por-tipo-sanguineo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild(UploadComponent) uploadComponent: UploadComponent
  @ViewChild(CandidatosPorEstadoComponent) candidatosPorEstadoComponent: CandidatosPorEstadoComponent 
  @ViewChild(GraficoIMCMedioComponent) imcMedioComponent: GraficoIMCMedioComponent 
  @ViewChild(PercentualObesosPorGeneroComponent) percentualObesosPorGeneroComponent: PercentualObesosPorGeneroComponent
  @ViewChild(PossiveisDoadoresPorTipoSanguineoComponent) possiveisDoadoresPorTipoSanguineoComponent: PossiveisDoadoresPorTipoSanguineoComponent 
  @ViewChild(MediaIdadePorTipoSanguineoComponent) mediaIdadePorTipoSanguineoComponent: MediaIdadePorTipoSanguineoComponent
  
  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
      this.uploadComponent.onFileSelected(event);
  }

  uploadFile() {
      this.uploadComponent.uploadFile();
  }

  carregarCandidatosPorEstado() {
      this.candidatosPorEstadoComponent.buscarCandidatosPorEstado();
  }
  
  carregarImcMedioPorIdade() {
      this.imcMedioComponent.buscarDadosIMCMedioPorFaixaEtaria();
  }
  
  carregarPercentualObesosPorGenero() {
      this.percentualObesosPorGeneroComponent.buscarPercentualObesosPorGenero();
    
  }
  
  carregarPossiveisDoadoresPorTipoSanguineo() {
      this.possiveisDoadoresPorTipoSanguineoComponent.buscarPossiveisDoadoresPorTipoSanguineo();
    
  }
  
  carregarMediaIdadePorTipoSanguineo() {
      this.mediaIdadePorTipoSanguineoComponent.buscarMediaIdadePorTipoSanguineo();
  }
}