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
import { DateFormatter } from 'ngx-bootstrap/datepicker/public_api';
import { formatDate } from '@angular/common';
// import { formatDate } from 'ngx-bootstrap/chronos/format';

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
    // { id: 1, name: ' ' },
    { id: 1, name: 'NEUROLOGIJA' },
    { id: 2, name: 'OFTALMOLOGIJA' },
    { id: 3, name: 'INFEKTOLOGIJA' }

  ]
  minDate: Date;


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

    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);

    this.route.paramMap.subscribe(params => {
      this.lekarFilter = new KlinikFilter( params.get("spec"), params.get("date"))
      this.idKlinika = params.get("idKlinika");
    })
    console.log('filter ' + this.lekarFilter+'  idKlinika:' + this.idKlinika);
    if(this.lekarFilter !=null){
      this.form.spec = this.lekarFilter.spec;
      this.form.date = formatDate(this.lekarFilter.date,"dd-MM-2020", 'en-US');  "24-5-2020";
    }
    this.reloadData();
  }
  reloadData() {
    //jedan servis radi u zavisnosti dali ima parametre dobaflja klinike
    // this.lekari = this.korisnikService.getLekariKlinike(idKlinika, 'NEUROLOGIJA');

    this.lekari = this.korisnikService.getLekariKlinike(this.idKlinika, this.lekarFilter.spec, this.lekarFilter.date);

  }

  onSubmit() {
    console.log(this.form);

    this.lekarFilter = new KlinikFilter(this.form.spec, this.form.date);
    console.log(this.lekarFilter);
    console.log(this.lekarFilter.date.toString());

    // this.lekari = this.korisnikService.getKlinikaList(this.klinikaFilter);


  }


  isPacijent() :boolean{
    if(this.info.authorities.includes("PACIJENT")){
      return true;
    }else{
      return false;
    }
  }

}
