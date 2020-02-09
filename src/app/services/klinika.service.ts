import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KlinikFilter } from '../klinika-list/klinika-filter';
import { KlinikFilterDodatni } from '../klinika-list/klinika-filter-dodatni';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class KlinikaService {

  private klinikaUrl = 'http://localhost:8080/api/klinika';


  constructor(private http: HttpClient) { }


  public getKlinikaList(filter: KlinikFilter, filterDodatni: KlinikFilterDodatni): Observable<any> {
    // console.log( "-----------------svi");
    if(filter.spec.length != 0 && filter.date.length != 0 && filterDodatni.lokacija.length != 0 
      && filterDodatni.ocenaKlinikeMIN.length !=0 && filterDodatni.ocenaKlinikeMAX.length !=0){
      console.log( "-----------------spac date ocena lok");
      
      const params = new HttpParams().set('spec', filter.spec).set('date', filter.date).set('loc', filterDodatni.lokacija)
      .set('omin', filterDodatni.ocenaKlinikeMIN).set('omax', filterDodatni.ocenaKlinikeMAX);
      return this.http.get(this.klinikaUrl + '/specdateocenaloc', { params });
    }

    if(filter.spec.length != 0 && filter.date.length != 0 && filterDodatni.lokacija.length != 0 ){
      console.log( "-----------------spec date lok= " + "_"+filterDodatni.lokacija+"_ lenght: _" +  filterDodatni.lokacija.length+"_") ;
      const params = new HttpParams().set('spec', filter.spec).set('date', filter.date).set('loc', filterDodatni.lokacija);
      return this.http.get(this.klinikaUrl + '/specdateloc', { params });
    }
    if(filter.spec.length != 0 && filter.date.length != 0 && filterDodatni.ocenaKlinikeMIN.length !=0 && filterDodatni.ocenaKlinikeMAX.length !=0){
      console.log( "-----------------spac date ocena");
      const params = new HttpParams().set('spec', filter.spec).set('date', filter.date)
      .set('omin', filterDodatni.ocenaKlinikeMIN).set('omax', filterDodatni.ocenaKlinikeMAX);
      return this.http.get(this.klinikaUrl + '/specdateocena', { params });
    }

    if ( filter.spec.length != 0 && filter.date.length != 0) {
      console.log("-----------------spac date    " +filter + " "+ filter.spec + filter.date);
      
      // const params = new HttpParams().set('spec', filter.spec).set('date', (String(filter.date)).substr(8,8));
      const params = new HttpParams().set('spec', filter.spec).set('date', filter.date);
      return this.http.get(this.klinikaUrl + '/specdate', { params });
    } else {
  // console.log(lokacijaFilter +" "+ ocenaKlinikaFilter + filter.date );
  console.log("-----------------eeeeeeeeeeelse vati apsolutno sve___________  " +filter + " "+ filter.spec + filter.date);
  // console.log(filter != null  );
  // console.log( filter.spec != null);
  // console.log(filter.date != null);
  // console.log(filter.spec.length != 0);
  // console.log(filter.date.length);
  // console.log( filter.spec != ' ');
  // console.log(filter.date != '');
  // console.log(filter.date);
  // console.log(filter.spec);
  // console.log(filterDodatni.lokacija);
  // console.log(filter.date == null);
  // console.log(filterDodatni.lokacija==null);
  
  

      return this.http.get(this.klinikaUrl + '/all');
    }

  }

  //not used
  public getKlinika(idKlinika: number): Observable<any> {
    // console.log('front poslao back stuffffffffffffffffffffff ' + this.korisnikUrl+ '/' +email);
    return this.http.get(this.klinikaUrl + '/' + idKlinika);

  }

}
