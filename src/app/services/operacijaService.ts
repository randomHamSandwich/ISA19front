import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class OperacijaService {

    private pregledUrl = ' http://localhost:8080/api/operacija'

    constructor(private http: HttpClient) { }

    public getOperacije(idKorisnik): Observable<any> {

        const params = new HttpParams().set('idKorisnik', idKorisnik);
        return this.http.get(this.pregledUrl + '/izvrseni', { params });
    }

    
    public getOperacijeZakazani(idKorisnik): Observable<any> {

        const params = new HttpParams().set('idKorisnik', idKorisnik);
        return this.http.get(this.pregledUrl + '/zakazani', { params });
    }
}