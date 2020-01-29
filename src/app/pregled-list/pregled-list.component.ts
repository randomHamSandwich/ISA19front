import { Component, OnInit, Input } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { Pregled } from './pregled';
import { Korisnik } from '../home/korisnik';
import { OperacijaService } from '../services/operacijaService';
import { PregledService } from '../services/pregledService';
import { TokenStorageService } from '../auth/token-storage.service';
import { DateFormatter } from 'ngx-bootstrap/datepicker/public_api';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-pregled-list',
  templateUrl: './pregled-list.component.html',
  styleUrls: ['./pregled-list.component.css']
})
export class PregledListComponent implements OnInit {

  info: {
    token: any;
    username: any;
    authorities: any;
    idKorisnik: string
  }
  pregledi: Observable<Pregled[]>;
  preglediZakazani: Observable<Pregled[]>;
  isPriazIstorijaPregleda: boolean;
  isOcenaLekar =[];
  isOcenaKlina =[];
  oceneLekara =[];
  oceneKlinia =[];

  constructor(private token: TokenStorageService, private pregledService: PregledService, private operacijaService: OperacijaService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      idKorisnik: this.token.getIdKorisnik()

    };
    this.reloadData();
    this.isPriazIstorijaPregleda = true;
    // this.isOcenaLekar = false;
    // this.isOcenaKlina = false;
  }
  reloadData() {
    this.pregledi = this.pregledService.getPregled(this.info.idKorisnik);
    this.preglediZakazani = this.pregledService.getPreglediZakazani(this.info.idKorisnik);

  }

  isOcenjenLekar(p: Pregled): boolean {
    if (p.ocenaLekara == null) {
      return false;
    }
    else {
      return true;
    }
  }

  isOcenjenaKlinika(p: Pregled): boolean {
    if (p.ocenaKilinike == null) {
      return false;
    }
    else {
      return true;
    }
  }


  onOtkaziPregled(pregled: Pregled) {
    this.pregledService.otkaziPregled(
      {
        idPregleda: pregled.idPregleda

      }
    ).subscribe();
    window.location.reload();
  }

  onChangePrikaz() {
    this.isPriazIstorijaPregleda = !this.isPriazIstorijaPregleda;
  }

  onOceniLekara(pregled: Pregled, ocena : number) {
    this.pregledService.oceniLekara(
      {
        "idPregleda": pregled.idPregleda,
        "ocenaLekara": ocena,
        "idLekara": pregled.idLekara
      }
    ).subscribe();

  }

  onOceniKliniku(pregled: Pregled, ocena : number) {
    this.pregledService.oceniKliniku(
      {
        "idPregleda": pregled.idPregleda,
        "ocenaKilinike": ocena,
        "idLekara": pregled.idLekara
    
      }
    ).subscribe();

  }
  onOcenaLekaraChange(ocena:number,index: number ){ this.isOcenaLekar[index]= true;
  console.log(index)}
  onOcenaKlinikeChange(ocena:number, index: number){ this.isOcenaKlina[index]= true ;      console.log(index)}



  isPacijent(): boolean {
    if (this.info.authorities.includes("PACIJENT")) {
      return true;
    } else {
      return false;
    }
  }

}
