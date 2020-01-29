import { Component, OnInit, Input } from '@angular/core';
import { KlinikaService } from '../services/klinika.service';
import { KlinikaListComponent } from '../klinika-list/klinika-list.component';
import { Klinika } from './klinika';
import { KlinikFilter } from '../klinika-list/klinika-filter';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-klinika',
  templateUrl: './klinika.component.html',
  styleUrls: ['./klinika.component.css']
})
export class KlinikaComponent implements OnInit {

  @Input() klinika: Klinika;
  @Input() klinikaFilter: KlinikFilter;

  constructor(private router: Router, private klinikaService: KlinikaService) { }


  ngOnInit() {
  }

  onThisSubmit() {
    // this.router.navigate(['/lekarlist',{ : "sssss"}])
    if (this.klinikaFilter== null ) {
      this.router.navigate(['/lekarlist' ,{idKlinika: this.klinika.idKlinika}]);
    }
    else { this.router.navigate(['/lekarlist', {idKlinika: this.klinika.idKlinika, spec: this.klinikaFilter.spec, date: this.klinikaFilter.date }]); }

  }

  isKlinikaFilterNull(): boolean {
    if( this.klinikaFilter == null){
      return true;
    }else{
      return false;
    }
  }

}
