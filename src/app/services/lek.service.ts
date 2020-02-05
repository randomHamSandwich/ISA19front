import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class LekService {

    private korisnikUrl = 'http://localhost:8080/api/lek';

    constructor(private http: HttpClient) { }

    public getAlergije(idKorisnik: any): Observable<any> {
      
        const params = new HttpParams().set('idKorisnik', idKorisnik);
        return this.http.get(this.korisnikUrl + '/alergije', {params});
    
      }
    

}