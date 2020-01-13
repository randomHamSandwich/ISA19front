import { Component, OnInit,Input } from '@angular/core';
import {  UpdatePacijentInfo } from './udate-pacient-info';
import { Korisnik } from '../home/korisnik';
import { KorisnikService } from '../services/korisnik.service';
@Component({
  selector: 'app-pacijent-update',
  templateUrl: './pacijent-update.component.html',
  styleUrls: ['./pacijent-update.component.css']
})
export class PacijentUpdateComponent implements OnInit {
  form: any = {};
  updateInfo: UpdatePacijentInfo;
  @Input() korisnik: Korisnik
  changePassword : boolean;
  errorMessage :string;
  isUpdateFailed :boolean;

  constructor(private korisnikService: KorisnikService) { }

  ngOnInit() {
    this.form.name=this.korisnik.ime;
    this.form.surname=this.korisnik.prezime;
    this.form.streetName=this.korisnik.ulica;
    this.form.streetNumber=this.korisnik.brojUlice;
    this.form.contry=this.korisnik.drzava;
    this.form.phoneNumber=this.korisnik.brojTelefona;
    this.form.city = this.korisnik.grad;
    this.changePassword = false;
    this.errorMessage="";
    this.isUpdateFailed=false;
    
  }

  onChangePassword(){
    this.changePassword = !this.changePassword;
  }

  onSubmit() {
    console.log(this.form);

    this.updateInfo = new UpdatePacijentInfo(
      this.form.name,
      this.form.surname,
      this.form.username,
      this.form.streetName,
      this.form.streetNumber,
      this.form.contry,
      this.form.city,
      this.form.phoneNumber,
      this.form.password 
      
      
      );
      this.korisnikService.updateKorisnik(
        this.korisnik.email,
        {
          ime: this.form.name,
          prezime: this.form.surname,
          ulica : this.form.streetName, 
          brojUlice:  this.form.streetNumber,
          drzava:  this.form.contry,
          brojTelefona :  this.form.phoneNumber,
          grad :  this.form.city


        }
      )      .subscribe(
        data => {
          console.log(data);
          this.korisnik = data as Korisnik;
          this.isUpdateFailed = false;
          window.location.reload();
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isUpdateFailed= true;
        
        }
        );
        

    }
}

