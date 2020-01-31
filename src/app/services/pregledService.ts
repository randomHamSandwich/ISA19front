import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PregledService {

    private pregledUrl = ' http://localhost:8080/api/pregled';

    constructor(private http: HttpClient) { }

    public getPregled(idKorisnik): Observable<any> {

        const params = new HttpParams().set('idKorisnik', idKorisnik);
        return this.http.get(this.pregledUrl + '/izvrseni', { params });
    }

    public getBolesti(idKorisnik): Observable<any> {

        const params = new HttpParams().set('idKorisnik', idKorisnik);
        return this.http.get(this.pregledUrl + '/bolesti', { params });
    }
    

    public getPreglediZakazani(idKorisnik): Observable<any> {
        const params = new HttpParams().set('idKorisnik', idKorisnik);
        return this.http.get(this.pregledUrl + '/zakazani', { params })
    }

    public getBrziPregledi() : Observable<any>{
        return this.http.get(this.pregledUrl+'/brzi');
    }
// rezervisi
    public zakaziPregled(value: any) {
        return this.http.post(this.pregledUrl, value);
    }

    public zakaziBrziPregled(value: any) {
        return this.http.post(this.pregledUrl+'/brzi', value);
    }
    

    public otkaziPregled(value: any) {
        return this.http.put(this.pregledUrl + '/otkazi', value);
    }

    public oceniKliniku(value: any) {
        return this.http.put(this.pregledUrl + '/oceniKliniku', value);
    }

    public oceniLekara(value: any) {
        return this.http.put(this.pregledUrl + '/oceniLekara', value);
    }

    

}