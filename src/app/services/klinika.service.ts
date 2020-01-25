import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KlinikFilter } from '../klinika-list/klinika-filter';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class KlinikaService {

  private klinikaUrl = 'http://localhost:8080/api/klinika';


  constructor(private http: HttpClient) { }


  public getKlinikaList(filter: KlinikFilter): Observable<any> {
    if (filter != null && filter.spec != null && filter.date != null && filter.spec.length != 0 && filter.spec != ' ' && filter.date != '') {
      // const params = new HttpParams().set('spec', filter.spec).set('date', (String(filter.date)).substr(8,8));
      const params = new HttpParams().set('spec', filter.spec).set('date', filter.date);
      return this.http.get(this.klinikaUrl + '/specdate', { params });
    } else {

      return this.http.get(this.klinikaUrl + '/all');
    }

  }

  //not used
  public getKlinika(idKlinika: number): Observable<any> {
    // console.log('front poslao back stuffffffffffffffffffffff ' + this.korisnikUrl+ '/' +email);
    return this.http.get(this.klinikaUrl + '/' + idKlinika);

  }

}
