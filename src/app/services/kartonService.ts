import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KartonService {

  private kartonUrl = 'http://localhost:8080/api/karton';


  constructor(private http: HttpClient) { }


  public getKarton(idKorisnik: any): Observable<any> {
    console.log("kartonSevice zovi back eyasdadhaskdhalksdasld")
    const params = new HttpParams().set('idKorisnik', idKorisnik);
    return this.http.get(this.kartonUrl, {params} );
  }


}
