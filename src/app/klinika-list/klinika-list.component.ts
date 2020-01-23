import { Component, OnInit } from '@angular/core';
import { Klinika } from '../klinika/klinika';
import { Observable } from 'rxjs';
import { KlinikaService } from '../services/klinika.service';
import { KorisnikService } from '../services/korisnik.service';
import { Specialization } from './specialization';
import { KlinikFilter } from './klinika-filter';
import { TokenStorageService } from '../auth/token-storage.service';
import { DatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';

@Component({
  selector: 'app-klinika-list',
  templateUrl: './klinika-list.component.html',
  styleUrls: ['./klinika-list.component.css']
})
export class KlinikaListComponent implements OnInit {

  klinike: Observable<Klinika[]>;
  klinikaFilter: KlinikFilter;
  form: any = {};
  minDate: Date;

  info: {
    token: any;
    username: any;
    authorities: string[];
    idKorisnik: any
  }
  specs: Specialization[] = [
    // { id: 1, name: ' ' },
    { id: 1, name: 'NEUROLOGIJA' },
    { id: 2, name: 'OFTALMOLOGIJA' },
    { id: 3, name: 'INFEKTOLOGIJA' }

  ]


  constructor(private klinikaService: KlinikaService,  private token: TokenStorageService,private korisnikService: KorisnikService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      idKorisnik : this.token.getIdKorisnik()
      
    };
    this.reloadData();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
    // this.form.spec= ' ';
  }

  reloadData() {
    //jedan servis radi u zavisnosti dali ima parametre dobaflja klinike

    this.klinike = this.klinikaService.getKlinikaList({ spec: ' ', date: ' ' });

  }

  onSubmit() {
    console.log(this.form);
    // if(this.form.spec === ' '){
    //   this.klinikaFilter.spec='';  
    // }else{
    this.klinikaFilter = new KlinikFilter(this.form.spec, this.form.date);
    console.log(this.klinikaFilter);

    this.klinike = this.klinikaService.getKlinikaList(this.klinikaFilter);


  }


  // TEST(k: Klinika): boolean {
  //   // this.korisnikService.getLekariSaSpecijalizacijom
  //   return true;
  // }

  isPacijent() :boolean{
    if(this.info.authorities.includes("PACIJENT")){
      return true;
    }else{
      return false;
    }
  }

}
