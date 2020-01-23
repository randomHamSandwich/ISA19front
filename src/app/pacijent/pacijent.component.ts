import { Component, OnInit, Input } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { KorisnikService } from '../services/korisnik.service';
import { Korisnik } from '../home/korisnik';

@Component({
  selector: 'app-pacijent',
  templateUrl: './pacijent.component.html',
  styleUrls: ['./pacijent.component.css']
})
export class PacijentComponent implements OnInit {
  @Input() korisnik: Korisnik
  updatePacijent :boolean;

  constructor(private korisnikService: KorisnikService) { }

  ngOnInit() {
    this.updatePacijent=false;
    

  }

  onUpdatePacijent(){
    this.updatePacijent=!this.updatePacijent;
    // window.location.reload();

  }
}