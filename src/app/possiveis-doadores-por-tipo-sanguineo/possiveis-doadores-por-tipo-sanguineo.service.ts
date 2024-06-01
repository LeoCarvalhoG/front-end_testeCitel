import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PossiveisDoadoresPorTipoSanguineoService {
  private baseUrl = `${environment.baseUrl}/api/candidatos/possiveis-doadores-por-tipo-sanguineo`;

  constructor(private http: HttpClient) {}

  buscarPossiveisDoadoresPorTipoSanguineo(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
