import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Operacija } from './operacija'
import { TokenStorageService } from '../auth/token-storage.service';
import { OperacijaService } from '../services/operacijaService';

@Component({
  selector: 'app-operacija-list',
  templateUrl: './operacija-list.component.html',
  styleUrls: ['./operacija-list.component.css']
})
export class OperacijaListComponent implements OnInit {

  info: {
    token: any;
    username: any;
    authorities: any;
    idKorisnik: string
  }
  operacije: Observable<Operacija[]>;
  operacijeZakazane: Observable<Operacija[]>;
  isPriazIstorijaOperacija: boolean;
  isOcenaLekar = [];
  isOcenaKlina = [];
  oceneLekara = [];
  oceneKlinia = [];
    //sorting
    key: string = 'vremePocetka'; //set default
    reverse: boolean = false;
    sort(key) {
      this.key = key;
      this.reverse = !this.reverse;
    }

  constructor(private token: TokenStorageService, private operacijaService: OperacijaService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      idKorisnik: this.token.getIdKorisnik()

    };
    this.reloadData();
    this.isPriazIstorijaOperacija = true;
  }
  reloadData() {
    this.operacije = this.operacijaService.getOperacije(this.info.idKorisnik)
    this.operacijeZakazane = this.operacijaService.
      getOperacijeZakazani(this.info.idKorisnik);

  }

  onChangePrikaz() {
    this.isPriazIstorijaOperacija = !this.isPriazIstorijaOperacija;
  }

  isPacijent(): boolean {
    if (this.info.authorities.includes("PACIJENT")) {
      return true;
    } else {
      return false;
    }
  }

  isOcenjenLekar(o: Operacija): boolean {
    if (o.ocenaLekara == null) {
      return false;
    }
    else {
      return true;
    }

  }

  isOcenjenaKlinika(o: Operacija): boolean {
    if (o.ocenaKlinke == null) {
      return false;
    }
    else {
      return true;
    }
  }

  onOceniLekara(operacija: Operacija, ocena : number) {
    this.operacijaService.oceniLekara(
      {
        "idOperacija": operacija.idOperacija,
        "ocenaLekara": ocena
        // "idLekara": pregled.idLekara
      }
    ).subscribe();
    window.location.reload();
  }

  onOceniKliniku(operacija: Operacija, ocena : number) {
    this.operacijaService.oceniKliniku(
      {
        "idOperacija": operacija.idOperacija,
        "ocenaKlinke": ocena
        // "idLekara": operacija.idLekara
    
      }
    ).subscribe();
    window.location.reload();
  }

  onOcenaLekaraChange(ocena: number, index: number) { this.isOcenaLekar[index] = true; console.log(index) }
  onOcenaKlinikeChange(ocena: number, index: number) { this.isOcenaKlina[index] = true; console.log(index) }



}

