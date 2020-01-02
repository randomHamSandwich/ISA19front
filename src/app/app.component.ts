import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {

         if (role === 'ADMINISTRATOR_KLINICKOG_CENTRA') {
          this.authority = 'akc';
          return false;
        }

        else if (role === 'ADMINISTRAOR_KLINIKE') {
          this.authority = 'ak';
          return false;
        }

        else if (role === 'LEKAR') {
          this.authority = 'lekar';
          return false;
        } 
        
        else if (role === 'MEDICINSKA_SESTRA') {
          this.authority = 'ms';
          return false;
        }
        
        else if (role === 'PACIJENT') {
          this.authority = 'pacijent';
          return false;
        }

        this.authority = 'user';
        return true;
      });
    }
  }
}
