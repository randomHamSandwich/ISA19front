import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

     public getLekarSaSpec(id: string, spec: string){
      // return this.http.get(this.korisnikUrl+id+'/spec?'+spec);
      
      const params = new HttpParams().set('spec', spec);
      return this.http.get(this.korisnikUrl+'/'+id,{params})
    }

    public getLekariKlinike(idKlinike : string): Observable<any>{
      const params = new HttpParams().set('idKlinike', idKlinike);
      return this.http.get(this.korisnikUrl+'/'+'klinike',{params});
    }

  }