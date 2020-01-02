// import { runInThisContext } from 'vm';

export class UpdatePacijentInfo{

    ime: string;
    prezime: string;
    username: string;
    ulica: string;
    brojUlice: string;
    drzava: string;
    grad: string;
    brojTelefona: string;
    // jmbg: string;
    // email: string;
    password: string;

constructor(ime :string, 
    prezime: string,
     username: string,
      ulica: string
    ,brojUlice :string, 
    drzava: string, 
    grad: string,
    brojTelefona: string,
    password : string){
        this.ime = ime;
        this.prezime = prezime;
        this.username = username;
        this.ulica = ulica;
        this.brojUlice = brojUlice;
        this.drzava = drzava;
        this.grad = grad;
        this.brojTelefona = brojTelefona;
        this.password = password;

    }
}


