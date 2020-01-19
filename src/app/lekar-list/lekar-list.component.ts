import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Klinika } from '../klinika/klinika';
import { Observable } from 'rxjs';
import { KorisnikService } from '../services/korisnik.service';
import { Lekar } from '../lekar/lekar'
import { Specialization } from '../klinika-list/specialization';
import { KlinikFilter } from '../klinika-list/klinika-filter';
import { KlinikaService } from '../services/klinika.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-lekar-list',
  templateUrl: './lekar-list.component.html',
  styleUrls: ['./lekar-list.component.css']
})
export class LekarListComponent implements OnInit {
  // @Input() klinika: Klinika;

  lekari: Observable<Lekar[]>;
  lekarFilter: KlinikFilter;
  form: any = {};
  idKlinika : string;

  info: {
    token: any;
    username: any;
    authorities: string[];
    idKorisnik: any
  }
  specs: Specialization[] = [
    { id: 1, name: ' ' },
    { id: 2, name: 'NEUROLOGIJA' },
    { id: 3, name: 'OFTALMOLOGIJA' },
    { id: 4, name: 'INFEKTOLOGIJA' }

  ]


//   When subscribing to an observable in a component, you almost always arrange to unsubscribe when the component is destroyed.
// There are a few exceptional observables where this is not necessary. The ActivatedRoute observables are among the exceptions.
  constructor(private token: TokenStorageService,private korisnikService: KorisnikService,private route: ActivatedRoute) { }

  ngOnInit()  {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      idKorisnik : this.token.getIdKorisnik()
      
    };


    this.route.paramMap.subscribe(params => {
      this.lekarFilter = new KlinikFilter( params.get("spec"), params.get("date"))
      this.idKlinika = params.get("idKlinika");
    })
    console.log('filter ' + this.lekarFilter+'  idKlinika:' + this.idKlinika);
    this.reloadData();
  }
  reloadData() {
    //jedan servis radi u zavisnosti dali ima parametre dobaflja klinike
    // this.lekari = this.korisnikService.getLekariKlinike(idKlinika, 'NEUROLOGIJA');

    this.lekari = this.korisnikService.getLekariKlinike(this.idKlinika, this.lekarFilter.spec);

  }


  isPacijent() :boolean{
    if(this.info.authorities.includes("PACIJENT")){
      return true;
    }else{
      return false;
    }
  }

}
