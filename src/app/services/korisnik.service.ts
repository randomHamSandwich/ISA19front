import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LekarFilterDodatni } from '../lekar-list/leka-filter-dodatni';



@Injectable({
  providedIn: 'root'
})

export class KorisnikService {

  private korisnikUrl = 'http://localhost:8080/api/kroisnik';

  constructor(private http: HttpClient) { }

  public getKorisnik(email: string): Observable<any> {
    // console.log('front poslao back stuffffffffffffffffffffff ' + this.korisnikUrl+ '/' +email);
    return this.http.get(this.korisnikUrl + '/' + email);

  }

  public updateKorisnik(email: string, value: any): Observable<any> {
    // conso
    return this.http.put(this.korisnikUrl + '/' + email, value)
  }

  public changePassowrd(email: string, value: any): Observable<any> {
    return this.http.put(this.korisnikUrl + '/pass/' + email, value)
  }
  //not used
  public getLekarSaSpec(id: string, spec: string) {
    // return this.http.get(this.korisnikUrl+id+'/spec?'+spec);

    const params = new HttpParams().set('spec', spec);
    return this.http.get(this.korisnikUrl + '/' + id, { params })
  }

  public getLekariKlinike(idKlinike: string, spec: string, date: string, lekarFilterDodatni: LekarFilterDodatni): Observable<any> {
    if (spec == null || date == null) {
      const params = new HttpParams().set('idKlinike', idKlinike);
      return this.http.get(this.korisnikUrl + '/' + 'lekari/all', { params });
    }


    if (lekarFilterDodatni.ocenaLekarMAX.length != 0 &&
      lekarFilterDodatni.ocenaLekarMIN.length != 0 &&
      lekarFilterDodatni.imeLekar.length != 0 &&
      lekarFilterDodatni.prezimeLekar.length != 0) {

      console.log("-----------------spacDate ocena ime prezime");
      const params = new HttpParams()
        .set('idKlinike', idKlinike).set('spec', spec).set('date', date)
        .set('omin', lekarFilterDodatni.ocenaLekarMIN).set('omax', lekarFilterDodatni.ocenaLekarMAX)
        .set('ime', lekarFilterDodatni.imeLekar).set('prezime', lekarFilterDodatni.prezimeLekar);

      return this.http.get(this.korisnikUrl + '/' + 'lekari/oceimeprez', { params });
    }
    else if (lekarFilterDodatni.ocenaLekarMAX.length != 0 &&
      lekarFilterDodatni.ocenaLekarMIN.length != 0 &&
      lekarFilterDodatni.imeLekar.length != 0 &&
      lekarFilterDodatni.prezimeLekar.length == 0) {
      console.log("-----------------spacDate ocena ime ");

      const params = new HttpParams()
        .set('idKlinike', idKlinike).set('spec', spec).set('date', date)
        .set('omin', lekarFilterDodatni.ocenaLekarMIN).set('omax', lekarFilterDodatni.ocenaLekarMAX)
        .set('ime', lekarFilterDodatni.imeLekar);

      return this.http.get(this.korisnikUrl + '/' + 'lekari/oceime', { params });
    }
    else if (lekarFilterDodatni.ocenaLekarMAX.length != 0 &&
      lekarFilterDodatni.ocenaLekarMIN.length != 0 &&
      lekarFilterDodatni.imeLekar.length == 0 &&
      lekarFilterDodatni.prezimeLekar.length != 0) {


      console.log("-----------------spacDate ocena  prezime");
      const params = new HttpParams()
        .set('idKlinike', idKlinike).set('spec', spec).set('date', date)
        .set('omin', lekarFilterDodatni.ocenaLekarMIN).set('omax', lekarFilterDodatni.ocenaLekarMAX)
        .set('prezime', lekarFilterDodatni.prezimeLekar);

      return this.http.get(this.korisnikUrl + '/' + 'lekari/oceprez', { params });

    }
    else if (lekarFilterDodatni.ocenaLekarMAX.length != 0 &&
      lekarFilterDodatni.ocenaLekarMIN.length != 0 &&
      lekarFilterDodatni.imeLekar.length == 0 &&
      lekarFilterDodatni.prezimeLekar.length == 0) {


      console.log("-----------------spacDate ocena ");
      const params = new HttpParams()
        .set('idKlinike', idKlinike).set('spec', spec).set('date', date)
        .set('omin', lekarFilterDodatni.ocenaLekarMIN).set('omax', lekarFilterDodatni.ocenaLekarMAX)
        ;

      return this.http.get(this.korisnikUrl + '/' + 'lekari/oce', { params });
    }
    else if ((lekarFilterDodatni.ocenaLekarMAX.length == 0 ||
      lekarFilterDodatni.ocenaLekarMIN.length == 0) &&
      lekarFilterDodatni.imeLekar.length != 0 &&
      lekarFilterDodatni.prezimeLekar.length != 0) {


      console.log("-----------------spacDate ime prezime");
      const params = new HttpParams()
        .set('idKlinike', idKlinike).set('spec', spec).set('date', date)

        .set('ime', lekarFilterDodatni.imeLekar).set('prezime', lekarFilterDodatni.prezimeLekar);

      return this.http.get(this.korisnikUrl + '/' + 'lekari/imeprez', { params });


    }

    else if ((lekarFilterDodatni.ocenaLekarMAX.length == 0 ||
      lekarFilterDodatni.ocenaLekarMIN.length == 0) &&
      lekarFilterDodatni.imeLekar.length != 0 &&
      lekarFilterDodatni.prezimeLekar.length == 0) {



      console.log("-----------------spacDate  ime ");
      const params = new HttpParams()
        .set('idKlinike', idKlinike).set('spec', spec).set('date', date)

        .set('ime', lekarFilterDodatni.imeLekar);

      return this.http.get(this.korisnikUrl + '/' + 'lekari/ime', { params });

    }
    else if ((lekarFilterDodatni.ocenaLekarMAX.length == 0 ||
      lekarFilterDodatni.ocenaLekarMIN.length == 0) &&
      lekarFilterDodatni.imeLekar.length == 0 &&
      lekarFilterDodatni.prezimeLekar.length != 0) {


      console.log("-----------------spacDate  prezime");
      const params = new HttpParams()
        .set('idKlinike', idKlinike).set('spec', spec).set('date', date)

        .set('prezime', lekarFilterDodatni.prezimeLekar);

      return this.http.get(this.korisnikUrl + '/' + 'lekari/prez', { params });

    }
    else {
      console.log("-----------------spacDate  bezDodatnihFiltera");
      const params = new HttpParams()
        .set('idKlinike', idKlinike)
        .set('spec', spec)
        .set('date', date);
      return this.http.get(this.korisnikUrl + '/' + 'lekari', { params });
    }


  }

  // public getDostupiLekariKlinike(idKlinike: string, spec: string, date :Date){
  //   const params = new HttpParams()
  //   .set('idKlinike', idKlinike)
  //   .set('spec', spec)
  //   .set('date', date.toString());
  //   return this.http.get(this.korisnikUrl + '/lekari/dostupni', {params})
  // }


}