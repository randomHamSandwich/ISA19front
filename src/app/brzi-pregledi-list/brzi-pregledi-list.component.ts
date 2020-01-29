import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { Observable } from 'rxjs';
import { Pregled } from '../pregled-list/pregled';
import { PregledService } from '../services/pregledService';

@Component({
  selector: 'app-brzi-pregledi-list',
  templateUrl: './brzi-pregledi-list.component.html',
  styleUrls: ['./brzi-pregledi-list.component.css']
})
export class BrziPreglediListComponent implements OnInit {


  info: {
    token: any;
    username: any;
    authorities: string[];
    idKorisnik: any
  }

  brziPregledi: Observable<Pregled[]>;

  constructor(private token: TokenStorageService,private  pregledService : PregledService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      idKorisnik : this.token.getIdKorisnik()
      
    };

    this.reloadData();
  }

  reloadData() {
    this.brziPregledi = this.pregledService.getBrziPregledi();

  }

  onZakaziBrziTermin(pregled : Pregled){
    this.pregledService.zakaziBrziPregled(
      {
        "idPregleda": pregled.idPregleda,
        "idPacijent": this.info.idKorisnik

      }
    ).subscribe();
  }

  isPacijent() :boolean{
    if(this.info.authorities.includes("PACIJENT")){
      return true;
    }else{
      return false;
    }
  }


}
