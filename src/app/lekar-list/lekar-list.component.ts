import { Component, OnInit,Input } from '@angular/core';
import { Klinika } from '../klinika/klinika';

@Component({
  selector: 'app-lekar-list',
  templateUrl: './lekar-list.component.html',
  styleUrls: ['./lekar-list.component.css']
})
export class LekarListComponent implements OnInit {
  @Input() klinika: Klinika;

  constructor() { }

  ngOnInit() {
  }

}
