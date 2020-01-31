import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { Karton } from './karton';
import { KartonService } from '../services/kartonService';
import { Observable } from 'rxjs';
import { PregledService } from '../services/pregledService';
import { Pregled } from '../pregled-list/pregled';

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

  constructor(private token: TokenStorageService,private pregledService: PregledService, private kartonService: KartonService) { }

  ngOnInit() {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      idKorisnik: this.token.getIdKorisnik()

    };
    this.reloadData();
  }

  // reloadData() {
  //   console.log("xxxxxxxxxxxxxxxxxxxxxxx" + this.info.idKorisnik)
  //   this.karton =this.kartonService.getKarton(this.info.idKorisnik);

  // }


  reloadData() {
    this.karton = new Karton();
    this.kartonService.getKarton(this.info.idKorisnik).subscribe(karton => this.karton = karton);
    this.pregledIstorijaBolesti = this.pregledService.getBolesti(this.info.idKorisnik);

  }


  isPacijent(): boolean {
    if (this.info.authorities.includes("PACIJENT")) {
      return true;
    } else {
      return false;
    }
  }


}
