import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { CandidatosPorEstadoComponent } from '../candidatos-por-estado/candidatos-por-estado.component';
import { GraficoIMCMedioComponent } from '../grafico-imc-medio/grafico-imc-medio.component';
import { PercentualObesosPorGeneroComponent } from '../percentual-obesos-por-genero/percentual-obesos-por-genero.component';
import { MediaIdadePorTipoSanguineoComponent } from '../media-idade-por-tipo-sanguineo/media-idade-por-tipo-sanguineo.component';
import { PossiveisDoadoresPorTipoSanguineoComponent } from '../possiveis-doadores-por-tipo-sanguineo/possiveis-doadores-por-tipo-sanguineo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
onFileSelected($event: Event) {
throw new Error('Método não implementado.');
}
uploadFile() {
throw new Error('Método não implementado.');
}
  @ViewChild('candidatosPorEstadoContainer', { read: ViewContainerRef }) candidatosPorEstadoContainer: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    console.log('Componente inicializado!');
  }

  ngAfterViewInit() {
    if (this.candidatosPorEstadoContainer) {
      console.log('Container de componentes inicializado!');
    } else {
      console.error('Erro ao inicializar o container de componentes!');
    }
  }

  carregarCandidatosPorEstado() {
    if (!this.candidatosPorEstadoContainer) {
      console.error('candidatosPorEstadoContainer não inicializado!');
      return;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CandidatosPorEstadoComponent);
    this.candidatosPorEstadoContainer.clear();
    const componentRef = this.candidatosPorEstadoContainer.createComponent(componentFactory);
    
  }

  carregarImcMedioPorIdade() {
    if (!this.candidatosPorEstadoContainer) {
      console.error('candidatosPorEstadoContainer não inicializado!');
      return;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(GraficoIMCMedioComponent);
    this.candidatosPorEstadoContainer.clear();
    const componentRef = this.candidatosPorEstadoContainer.createComponent(componentFactory);
    
  }

  carregarPercentualObesosPorGenero() {
    if (!this.candidatosPorEstadoContainer) {
      console.error('candidatosPorEstadoContainer não inicializado!');
      return;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PercentualObesosPorGeneroComponent);
    this.candidatosPorEstadoContainer.clear();
    const componentRef = this.candidatosPorEstadoContainer.createComponent(componentFactory);
   
  }

  carregarMediaIdadePorTipoSanguineo() {
    if (!this.candidatosPorEstadoContainer) {
      console.error('candidatosPorEstadoContainer não inicializado!');
      return;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MediaIdadePorTipoSanguineoComponent);
    this.candidatosPorEstadoContainer.clear();
    const componentRef = this.candidatosPorEstadoContainer.createComponent(componentFactory);
    
  }

  carregarPossiveisDoadoresPorTipoSanguineo() {
    if (!this.candidatosPorEstadoContainer) {
      console.error('candidatosPorEstadoContainer não inicializado!');
      return;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PossiveisDoadoresPorTipoSanguineoComponent);
    this.candidatosPorEstadoContainer.clear();
    const componentRef = this.candidatosPorEstadoContainer.createComponent(componentFactory);
    
  }


}
