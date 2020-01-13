import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KlinikaService {

  private klinikaUrl = 'http://localhost:8080/api/klinika';
  
  
  constructor(private http: HttpClient) { }


  public getKlinikaList(spec: string): Observable<any> {
    
    if(spec.length!=0 && spec!=' '){
      const params = new HttpParams().set('spec', spec);
      return this.http.get(this.klinikaUrl+'/all', {params});
    }else{
      const params = new HttpParams().set('spec', '');
      return this.http.get(this.klinikaUrl+'/all', {params});
    }
    
  }
//isfiltriraj na backendu hql na becku i onda pozivaj samo ono sto ti treba yea
  // public getKlinikaList(): Observable<any> {
  //   const params = new HttpParams().set('spec', 'sdad');
  //   return this.http.get(this.klinikaUrl+'/all',{params});
  // }

  // sve sa jednim endpojntom pa u zavisnosti od parametara na back endu saljemo nazada filtrirane podatke ili ne
  // public getKlinikaSaLekarimSpec(): Observable<any>{
  //   const params = new HttpParams().set('spec', 'sdad');

  //   return this.http.get(this.klinikaUrl+'/spec',{params});
  // }

  public getKlinika(idKlinika: number): Observable<any> {
    // console.log('front poslao back stuffffffffffffffffffffff ' + this.korisnikUrl+ '/' +email);
      return this.http.get(this.klinikaUrl+'/'+idKlinika);

    }

}
