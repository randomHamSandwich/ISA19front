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
  

  constructor(private token: TokenStorageService, private operacijaService: OperacijaService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      idKorisnik: this.token.getIdKorisnik()

    };
    this.reloadData();
    this.isPriazIstorijaOperacija =true;
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
}
