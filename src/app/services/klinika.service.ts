import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KlinikFilter } from '../klinika-list/klinika-filter';

@Injectable({
  providedIn: 'root'
})
export class KlinikaService {

  private klinikaUrl = 'http://localhost:8080/api/klinika';
  
  
  constructor(private http: HttpClient) { }


  public getKlinikaList(filter: KlinikFilter): Observable<any> {
    if(filter == null || filter.spec==null){
      const params = new HttpParams().set('spec', '');
      return this.http.get(this.klinikaUrl+'/all', {params});
    }
    
    if(filter.spec.length!=0 && filter.spec!=' '){
      const params = new HttpParams().set('spec', filter.spec);
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

  //not used
  public getKlinika(idKlinika: number): Observable<any> {
    // console.log('front poslao back stuffffffffffffffffffffff ' + this.korisnikUrl+ '/' +email);
      return this.http.get(this.klinikaUrl+'/'+idKlinika);

    }

}
