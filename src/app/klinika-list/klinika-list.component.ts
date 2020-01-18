import { Component, OnInit } from '@angular/core';
import { Klinika } from '../klinika/klinika';
import { Observable } from 'rxjs';
import { KlinikaService } from '../services/klinika.service';
import { KorisnikService } from '../services/korisnik.service';
import { Specialization } from './specialization';
import { KlinikFilter } from './klinika-filter';

@Component({
  selector: 'app-klinika-list',
  templateUrl: './klinika-list.component.html',
  styleUrls: ['./klinika-list.component.css']
})
export class KlinikaListComponent implements OnInit {

  klinike: Observable<Klinika[]>;
  klinikaFilter: KlinikFilter;
  form: any = {};
  specs: Specialization[] = [
    { id: 1, name: ' ' },
    { id: 2, name: 'NEUROLOGIJA' },
    { id: 3, name: 'OFTALMOLOGIJA' },
    { id: 4, name: 'INFEKTOLOGIJA' }

  ]

  constructor(private klinikaService: KlinikaService, private korisnikService: KorisnikService) { }

  ngOnInit() {
    this.reloadData();
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


  TEST(k: Klinika): boolean {
    // this.korisnikService.getLekariSaSpecijalizacijom
    return true;

    if (k.idKlinika == '1') {
      return true;
    } else
      return false;
  }

}
