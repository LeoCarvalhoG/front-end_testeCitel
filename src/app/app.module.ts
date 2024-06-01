import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { CandidatosPorEstadoComponent } from './candidatos-por-estado/candidatos-por-estado.component';
import { GraficoIMCMedioComponent } from './grafico-imc-medio/grafico-imc-medio.component';
import { PercentualObesosPorGeneroComponent } from './percentual-obesos-por-genero/percentual-obesos-por-genero.component';
import { MediaIdadePorTipoSanguineoComponent } from './media-idade-por-tipo-sanguineo/media-idade-por-tipo-sanguineo.component';
import { PossiveisDoadoresPorTipoSanguineoComponent } from './possiveis-doadores-por-tipo-sanguineo/possiveis-doadores-por-tipo-sanguineo.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    HomeComponent,
    UploadComponent,
    CandidatosPorEstadoComponent,
    GraficoIMCMedioComponent,
    PercentualObesosPorGeneroComponent,
    MediaIdadePorTipoSanguineoComponent,
    PossiveisDoadoresPorTipoSanguineoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
