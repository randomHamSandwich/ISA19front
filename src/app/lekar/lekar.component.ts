import { Component, OnInit, Input } from '@angular/core';
import { Lekar } from './lekar';

@Component({
  selector: 'app-lekar',
  templateUrl: './lekar.component.html',
  styleUrls: ['./lekar.component.css']
})
// @Depricated
export class LekarComponent implements OnInit {
  
  @Input() lekar: Lekar;
  constructor() { }

  ngOnInit() {
  }

}
