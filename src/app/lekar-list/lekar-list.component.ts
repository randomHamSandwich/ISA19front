import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
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
import { PregledService } from '../services/pregledService';
import { LekarFilterDodatni } from './leka-filter-dodatni';
// import { formatDate } from 'ngx-bootstrap/chronos/format';

@Component({
  selector: 'app-lekar-list',
  templateUrl: './lekar-list.component.html',
  styleUrls: ['./lekar-list.component.css']
})
export class LekarListComponent implements OnInit {
  // @Input() klinika: Klinika;

  isBtnDisabled = [];
  lekari: Observable<Lekar[]>;
  lekarFilter: KlinikFilter;
  lekarFilterDodatni: LekarFilterDodatni;
  form: any = {};
  unesi: any = {};
  // slobodniTermini: any;
  moguciTermniList = [];
  idKlinika: string;
  isRezervise: boolean;
  zaRezervisanje: { izabraniLekar: Lekar, izabraniTermin: string }
  p: number = 1;

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

      //sorting
      key: string = 'name'; //set default
      reverse: boolean = false;
      sort(key){
        this.key = key;
        this.reverse = !this.reverse;
      }
  


  //   When subscribing to an observable in a component, you almost always arrange to unsubscribe when the component is destroyed.
  // There are a few exceptional observables where this is not necessary. The ActivatedRoute observables are among the exceptions.
  constructor(private token: TokenStorageService, private router: Router, private korisnikService: KorisnikService, 
    private pregledService: PregledService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      idKorisnik: this.token.getIdKorisnik()

    };
    this.isRezervise = false;
    this.lekarFilterDodatni = new LekarFilterDodatni('', '', '', '');
    // this.zaRezervisanje= new Object();
    // this.zaRezervisanje.termin="";

    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);

    this.route.paramMap.subscribe(params => {
      this.lekarFilter = new KlinikFilter(params.get("spec"), params.get("date"))
      this.idKlinika = params.get("idKlinika");
    })
    console.log('filter ' + this.lekarFilter.date + '  idKlinika:' + this.idKlinika);
    if (this.lekarFilter != null && this.lekarFilter.date != null && this.lekarFilter.spec != null) {
      this.form.spec = this.lekarFilter.spec;
      this.form.date = formatDate(this.lekarFilter.date, "dd-MM-2020", 'en-US'); "24-5-2020";
    }
    this.reloadData();
  }
  reloadData() {


    this.lekari = this.korisnikService.getLekariKlinike(this.idKlinika, this.lekarFilter.spec, this.lekarFilter.date, this.lekarFilterDodatni);

  }

  onSubmit() {
    console.log(this.form);
    if (this.form.ocenaMAX != null &&
      this.form.ocenaMIN != null &&
      this.form.ime != null &&
      this.form.prezime != null) {
      this.lekarFilterDodatni = new LekarFilterDodatni(this.form.ocenaMIN, this.form.ocenaMAX, this.form.ime, this.form.prezime);
    }
    else if (this.form.ocenaMAX != null &&
      this.form.ocenaMIN != null &&
      this.form.ime != null &&
      this.form.prezime == null) {
      this.lekarFilterDodatni = new LekarFilterDodatni(this.form.ocenaMIN, this.form.ocenaMAX, this.form.ime, '');

    }
    else if (this.form.ocenaMAX != null &&
      this.form.ocenaMIN != null &&
      this.form.ime == null &&
      this.form.prezime != null) {
      this.lekarFilterDodatni = new LekarFilterDodatni(this.form.ocenaMIN, this.form.ocenaMAX, '', this.form.prezime);

    }
    else if (this.form.ocenaMAX != null &&
      this.form.ocenaMIN != null &&
      this.form.ime == null &&
      this.form.prezime == null) {
      this.lekarFilterDodatni = new LekarFilterDodatni(this.form.ocenaMIN, this.form.ocenaMAX, '', '');

    }
    else if ((this.form.ocenaMAX == null ||
      this.form.ocenaMIN == null) &&
      this.form.ime != null &&
      this.form.prezime != null) {
      this.lekarFilterDodatni = new LekarFilterDodatni('', '', this.form.ime, this.form.prezime);

    }

    else if ((this.form.ocenaMAX == null ||
      this.form.ocenaMIN == null) &&
      this.form.ime != null &&
      this.form.prezime == null) {
      this.lekarFilterDodatni = new LekarFilterDodatni('', '', this.form.ime, '');

    }
    else if ((this.form.ocenaMAX == null ||
      this.form.ocenaMIN == null) &&
      this.form.ime == null &&
      this.form.prezime != null) {
      this.lekarFilterDodatni = new LekarFilterDodatni('', '', '', this.form.prezime);

    } else {
      this.lekarFilterDodatni = new LekarFilterDodatni('', '', '', '');
    }

    this.lekarFilter = new KlinikFilter(this.form.spec, this.form.date);
    console.log(this.lekarFilter);
    console.log(this.lekarFilter.date.toString());

    this.lekari = this.korisnikService.getLekariKlinike(this.idKlinika, this.lekarFilter.spec, this.lekarFilter.date, this.lekarFilterDodatni);
    // this.isBtnDisabled = true;

  }


  onPredjiNaRezervisiLekar(izabraniLekar: Lekar, izabraniTermin: string) {
    console.log("prosledjeni lekar " + izabraniLekar.idOsoba + " " + izabraniLekar.ime);
    console.log("izabrani termin " + izabraniTermin);
    this.zaRezervisanje = { izabraniLekar, izabraniTermin };
    this.isRezervise = true;
    // this.pregledService.zakaziPregled({
    //   idLekar: lekar.idOsoba,
    //   date: this.form.date.toString(),
    //   idPacijent: this.info.idKorisnik,
    //   // time: "08 30"
    //   time: ((String(izabraniTermin)).substr(0, 5)).replace(':', ' ')
    // })
    //   .subscribe();

  }
  onRezervisiLekara() {
    this.pregledService.zakaziPregled({
      idLekar: this.zaRezervisanje.izabraniLekar.idOsoba,
      date: this.form.date.toString(),
      idPacijent: this.info.idKorisnik,
      // time: "08 30"
      time: ((String(this.zaRezervisanje.izabraniTermin)).substr(0, 5)).replace(':', ' ')
    })
      .subscribe();
  }

  onTerminChange(termin: string, index: number) {
    console.log(((String(termin)).substr(0, 5)).replace(':', ' '));
    if (this.lekarFilter != null && this.lekarFilter.date != null && this.lekarFilter.spec != null) {
      this.isBtnDisabled[index] = true;
    }
  }

  onToBrziPregledi(){

      //  this.router.navigate(['/lekarlist' ,{idKlinika: idKlinika}]);

 this.router.navigate(['/brzipregledi', {idKlinika: this.idKlinika}]);
 
   }

  isPacijent(): boolean {
    if (this.info.authorities.includes("PACIJENT")) {
      return true;
    } else {
      return false;
    }
  }

}
