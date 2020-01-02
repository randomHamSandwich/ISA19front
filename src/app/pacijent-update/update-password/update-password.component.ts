import { Component, OnInit ,Input} from '@angular/core';
import { Korisnik } from 'src/app/home/korisnik';
import { UpdatePacijentInfo } from '../udate-pacient-info';
import { KorisnikService } from 'src/app/services/korisnik.service';


@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  form: any = {};
  updateInfo: UpdatePacijentInfo;
  @Input() korisnik: Korisnik
  constructor(private korisnikService: KorisnikService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    if(this.form.password !== this.form.passwordSecond){
      console.log("retyped new password is not the same");
      
    } 
      else
      {

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
          this.korisnikService.changePassowrd(
            this.korisnik.email,
            {
              lozinkaStara: this.form.oldPassword,
              lozinkaNova: this.form.passwordSecond

            }
          )      .subscribe(
            data => {
              console.log(data);
              this.korisnik = data as Korisnik;
            },
            error => console.log(error));
            // window.location.reload();
      }
    }

}
