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
  }

  korisnik:Observable<Korisnik> ;
  constructor(private token: TokenStorageService, private korisnikService: KorisnikService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
      
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
    // this.korisnici = this.korisnikService.getKorisnik(this.info.username);
    // console.log('korisnik posle reloadData '+this.korisnik)
    
  }
}
