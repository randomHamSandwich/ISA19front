import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { Karton } from './karton';
import { KartonService } from '../services/kartonService';
import { Observable } from 'rxjs';
import { PregledService } from '../services/pregledService';
import { Pregled } from '../pregled-list/pregled';
import { Alergija } from './alergija';
import { LekService } from '../services/lek.service';
import { Operacija } from '../operacija-list/operacija';
import { OperacijaService } from '../services/operacijaService';

@Component({
  selector: 'app-karton',
  templateUrl: './karton.component.html',
  styleUrls: ['./karton.component.css']
})
export class KartonComponent implements OnInit {

  info: {
    token: any;
    username: any;
    authorities: any;
    idKorisnik: string
  }
  // karton: Observable<Karton>;
  karton: Karton;
  pregledIstorijaBolesti: Observable<Pregled>;
  alergije: Observable<Alergija>;
  // lose ime ne sve nego izvrsene jer treba da se 
  //belezi svaka poseta lekaru
  sviPregledi :Observable<Pregled>;
  sveOperacije: Observable<Operacija[]>;

  constructor(private token: TokenStorageService, private operacijaService: OperacijaService, private pregledService: PregledService, private kartonService: KartonService , private lekService : LekService) { }

  ngOnInit() {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      idKorisnik: this.token.getIdKorisnik()

    };
    this.reloadData();
  }


  reloadData() {
    this.karton = new Karton();
    this.kartonService.getKarton(this.info.idKorisnik).subscribe(karton => this.karton = karton);
    this.pregledIstorijaBolesti = this.pregledService.getBolesti(this.info.idKorisnik);
    this.alergije=this.lekService.getAlergije(this.info.idKorisnik);
    this.sviPregledi = this.pregledService.getPregled(this.info.idKorisnik);
    this.sveOperacije = this.operacijaService.getOperacije(this.info.idKorisnik)
  }


  isPacijent(): boolean {
    if (this.info.authorities.includes("PACIJENT")) {
      return true;
    } else {
      return false;
    }
  }


}
