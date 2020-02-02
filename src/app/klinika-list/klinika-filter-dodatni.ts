export class KlinikFilterDodatni {
    ocenaKlinikeMIN: string;
    ocenaKlinikeMAX: string;
    lokacija: string;


    constructor(ocenaKlinikeMIN: string,ocenaKlinikeMAX: string,  lokacija: string) {
        this.ocenaKlinikeMIN = ocenaKlinikeMIN;
        this.ocenaKlinikeMAX = ocenaKlinikeMAX;
        this.lokacija = lokacija;
    }

}


