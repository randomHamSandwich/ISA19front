import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Pregled } from './pregled';
import { Korisnik } from '../home/korisnik';
import { OperacijaService }from '../services/operacijaService';
import { PregledService} from '../services/pregledService';

@Component({
  selector: 'app-pregled-list',
  templateUrl: './pregled-list.component.html',
  styleUrls: ['./pregled-list.component.css']
})
export class PregledListComponent implements OnInit {
  // @Input() korisnik: Korisnik

  pregledi :Observable<Pregled[]>;

  constructor(private pregledService: PregledService, private operacijaService : OperacijaService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    // console.log('asdasdasdasdasdasdasdasdasdsdasdasd ' +this.korisnik.ime);
    this.pregledi = this.pregledService.getPregled('11'); 

  }
  
}
