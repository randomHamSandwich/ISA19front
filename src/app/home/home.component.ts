import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';
import { KorisnikService } from '../services/korisnik.service';
import {Korisnik } from './korisnik';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // info: any;
  info: {
    token: any;
    username: any;
    authorities: any;
    idKorisnik: any
  }

  korisnik:Observable<Korisnik> ;
  
  constructor(private token: TokenStorageService, private korisnikService: KorisnikService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      idKorisnik: this.token.getIdKorisnik()
      
    };
    this.reloadData();
  }
// TODO stavi u top level crnu komponentu
  logout() {
    this.token.signOut();
    window.location.reload();
  }


  reloadData() {
    this.korisnik = this.korisnikService.getKorisnik(this.info.username);
    // console.log('MI VOLIMO MIRU SKORIC' +((this.korisnik as unknown)as Korisnik).ime);
  }
}
