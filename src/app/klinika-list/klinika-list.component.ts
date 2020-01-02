import { Component, OnInit } from '@angular/core';
import { Klinika } from '../klinika/klinika';
import { Observable } from 'rxjs';
import { KlinikaService } from '../services/klinika.service';

@Component({
  selector: 'app-klinika-list',
  templateUrl: './klinika-list.component.html',
  styleUrls: ['./klinika-list.component.css']
})
export class KlinikaListComponent implements OnInit {

  klinike: Observable<Klinika[]>;

  constructor(private klinikaService: KlinikaService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.klinike = this.klinikaService.getKlinikaList();
  }

}
