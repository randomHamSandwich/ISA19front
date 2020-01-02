import { Component, OnInit,Input } from '@angular/core';
import { KlinikaService } from '../services/klinika.service';
import { KlinikaListComponent } from '../klinika-list/klinika-list.component';
import { Klinika } from './klinika';

@Component({
  selector: 'app-klinika',
  templateUrl: './klinika.component.html',
  styleUrls: ['./klinika.component.css']
})
export class KlinikaComponent implements OnInit {

  @Input() klinika: Klinika;

  constructor(private klinikaService: KlinikaService) { }


  ngOnInit() {
  }

}
