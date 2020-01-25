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


  isChangedPasswordFailed = false;
  errorMessage :string= '';

  constructor(private korisnikService: KorisnikService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    if(this.form.password !== this.form.passwordSecond){
      console.log("password's are not the same");
      this.isChangedPasswordFailed= true;
      this.errorMessage="password's are not the same";
    } 
      else
      {

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
              this.isChangedPasswordFailed=false;
              window.location.reload();
            },
            error => {
              console.log(error);
              this.errorMessage = error.error.message;
              this.isChangedPasswordFailed= true;
            }
            
            );
            

      }
    }

}
