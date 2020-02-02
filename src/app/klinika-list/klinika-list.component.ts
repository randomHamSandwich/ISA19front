import { Component, OnInit } from '@angular/core';
import { Klinika } from '../klinika/klinika';
import { Observable } from 'rxjs';
import { KlinikaService } from '../services/klinika.service';
import { KorisnikService } from '../services/korisnik.service';
import { Specialization } from './specialization';
import { KlinikFilter } from './klinika-filter';
import { TokenStorageService } from '../auth/token-storage.service';
import { KlinikFilterDodatni } from './klinika-filter-dodatni';

@Component({
  selector: 'app-klinika-list',
  templateUrl: './klinika-list.component.html',
  styleUrls: ['./klinika-list.component.css']
})
export class KlinikaListComponent implements OnInit {

  klinike: Observable<Klinika[]>;
  klinikaFilter: KlinikFilter;
  klinikaFilterDodatni: KlinikFilterDodatni;
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


  constructor(private klinikaService: KlinikaService, private token: TokenStorageService, private korisnikService: KorisnikService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      idKorisnik: this.token.getIdKorisnik()

    };
    this.reloadData();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);

  }

  reloadData() {
    //jedan servis radi u zavisnosti dali ima parametre dobaflja klinike

    this.klinikaFilterDodatni = new KlinikFilterDodatni('', '', '');
    this.klinike = this.klinikaService.getKlinikaList({ spec: '', date: '' }, this.klinikaFilterDodatni);

  }

  onSubmit() {

    // sve
    if (this.form.lokacija != null && this.form.lokacija != ''
      && this.form.ocenaMIN != null && this.form.ocenaMIN != ''
      && this.form.ocenaMAX != null && this.form.ocenaMAX != ''
    ) {
      this.klinikaFilterDodatni = new KlinikFilterDodatni(this.form.ocenaMIN, this.form.ocenaMAX, this.form.lokacija);
      // lokacija
    } else if ((this.form.ocenaMIN == null || this.form.ocenaMIN == ''
      || this.form.ocenaMAX == null || this.form.ocenaMAX == '') && this.form.lokacija != null && this.form.lokacija != '') {

      this.klinikaFilterDodatni = new KlinikFilterDodatni('', '', this.form.lokacija);

    }
    // min max ocena moraju oba da budu 
    else if ((this.form.ocenaMIN != null && this.form.ocenaMIN != ''
      && this.form.ocenaMAX != null && this.form.ocenaMAX != '') && (this.form.lokacija == null || this.form.lokacija == '')) {
      this.klinikaFilterDodatni = new KlinikFilterDodatni(this.form.ocenaMIN, this.form.ocenaMAX, '');
    }
    // ostatlo tj nista
    else {
      this.klinikaFilterDodatni = new KlinikFilterDodatni('', '', '');
    }
    this.klinikaFilter = new KlinikFilter(this.form.spec, this.form.date);
    console.log(this.klinikaFilter);
    // console.log("   zaPretragu" +this.form);
    console.log("   zaPretraguDodatnu" + this.klinikaFilter.date + " " + this.klinikaFilter.spec +
      " dodatni _" + this.klinikaFilterDodatni.lokacija + "_  _" + this.klinikaFilterDodatni.ocenaKlinikeMIN + "_  _" +
      this.klinikaFilterDodatni.ocenaKlinikeMAX + "_");
    this.klinike = this.klinikaService.getKlinikaList(this.klinikaFilter, this.klinikaFilterDodatni);


  }

  isPacijent(): boolean {
    if (this.info.authorities.includes("PACIJENT")) {
      return true;
    } else {
      return false;
    }
  }


}
