import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class PregledService{

    private pregledUrl =' http://localhost:8080/api/pregled';

    constructor(private http: HttpClient){}

    public getPregled(idKorisnik): Observable<any>{

        const params = new HttpParams().set('idKorisnik',idKorisnik );
        return this.http.get(this.pregledUrl+'/all',{params});
    }
}