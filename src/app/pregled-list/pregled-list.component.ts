import { Component, OnInit, Input } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { Pregled } from './pregled';
import { Korisnik } from '../home/korisnik';
import { OperacijaService }from '../services/operacijaService';
import { PregledService} from '../services/pregledService';
import { TokenStorageService } from '../auth/token-storage.service';

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
    idKorisnik : string
  }
  pregledi :Observable<Pregled[]>;

  constructor(private token: TokenStorageService, private pregledService: PregledService, private operacijaService : OperacijaService) { }

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
    // console.log('asdasdasdasdasdasdasdasdasdsdasdasd ' +this.korisnik.ime);
    this.pregledi = this.pregledService.getPregled(this.info.idKorisnik); 

  }

  isEmpty(p : Pregled) : boolean{
    if(p.ocenaLekara == null){
      return true;
    }
    else{
      return false;
    }
  }

  isPacijent() :boolean{
    if(this.info.authorities.includes("PACIJENT")){
      return true;
    }else{
      return false;
    }
  }
  
}
