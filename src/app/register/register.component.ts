import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  info: {
    token: any;
    username: any;
    authorities: string[];
    idKorisnik: any
  }
  isChangedPasswordFailed = false;
  constructor(private token: TokenStorageService, private authService: AuthService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      idKorisnik: this.token.getIdKorisnik()

    };
  }

  onSubmit() {

    console.log(this.form);
    if (this.form.password !== this.form.passwordSecond) {
      console.log("password's are not the same");
      this.isChangedPasswordFailed = true;
      this.errorMessage = "password's are not the same";
    } else {

      this.signupInfo = new SignUpInfo(
        this.form.name,
        this.form.surname,
        this.form.username,
        this.form.streetName,
        this.form.streetNumber,
        this.form.contry,
        this.form.city,
        this.form.phoneNumber,
        this.form.jmbg,
        this.form.email,
        this.form.password


      );

      this.authService.signUp(this.signupInfo).subscribe(
        data => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          this.isChangedPasswordFailed = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
          this.isChangedPasswordFailed = true;
        }
      );
    }

  }
  isPacijent(): boolean {
    if (this.info.authorities.includes("PACIJENT")) {
      return true;
    } else {
      return false;
    }
  }
}
