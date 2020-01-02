import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  export class KorisnikService{

    private korisnikUrl = 'http://localhost:8080/api/kroisnik';

    constructor(private http: HttpClient){}

    public getKorisnik(email: string): Observable<any> {
      // console.log('front poslao back stuffffffffffffffffffffff ' + this.korisnikUrl+ '/' +email);
        return this.http.get(this.korisnikUrl+'/'+email);

      }

    public updateKorisnik(email: string, value :any): Observable<any>{
      // conso
      return this.http.put(this.korisnikUrl+'/'+email, value)
    }

    public changePassowrd(email: string, value: any): Observable<any>{
      return this.http.put(this.korisnikUrl+'/pass/'+email,value)
    }

  }