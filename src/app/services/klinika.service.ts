import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KlinikaService {

  private klinikaUrl = 'http://localhost:8080/api/klinika';
  
  
  constructor(private http: HttpClient) { }


  public getKlinikaList(): Observable<any> {
    return this.http.get(this.klinikaUrl+'/all');
  }

}
