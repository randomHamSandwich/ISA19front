import { NumberValueAccessor } from '@angular/forms';

export class Pregled {

    idPregleda: number;
    vremePocetka: string;
    vremeZavrsetka: string;
    popust: number;
    cenaSaPopustom: number;
    ocenaLekara: number;
    ocenaKilinike: number;
    idLekara: number;

    imeLekara: string;
    prezimeLekara: string;
    dijagnoza: string;
    specijalizacija: string;

    nazivKlinike: string;
    gradKlionike: string;
    ulicaKlinike: string;
    brojUliceKlinike: string;

    ocenaLekaraZaBrzoZakazivanje: number;
    ocenaKlinikeZaBrzoZakazivanje: number;

    salaNaziv: String;

    cenaBezPopusta: number;

    constructor(idPregleda: number,
        vremePocetka: string,
        vremeZavrsetka: string,
        popust: number,
        cenaSaPopustom: number,
        ocenaLekara: number,
        ocenaKilinike: number,
        idLekara: number,
        imeLekara: string,
        prezimeLekara: string,
        dijagnoza: string,
        specijalizacija: string,
        nazivKlinike: string,
        gradKlionike: string,
        ulicaKlinike: string,
        brojUliceKlinike: string,
        ocenaLekaraZaBrzoZakazivanje: number,
        ocenaKlinikeZaBrzoZakazivanje: number,
        salaNaziv: string,
        cenaBezPopusta: number) {
        this.idPregleda = idPregleda;
        this.vremePocetka = vremePocetka;
        this.vremeZavrsetka = vremeZavrsetka;
        this.popust = popust;
        this.cenaSaPopustom = cenaSaPopustom;
        this.ocenaLekara = ocenaLekara;
        this.ocenaKilinike = ocenaKilinike;
        this.idLekara = idLekara;
        this.imeLekara = imeLekara;
        this.prezimeLekara = prezimeLekara;
        this.dijagnoza = dijagnoza;
        this.specijalizacija = specijalizacija;

        this.nazivKlinike = nazivKlinike;
        this.gradKlionike = gradKlionike;
        this.ulicaKlinike = ulicaKlinike;
        this.brojUliceKlinike = brojUliceKlinike;

        this.ocenaLekaraZaBrzoZakazivanje= ocenaLekaraZaBrzoZakazivanje;
        this.ocenaKlinikeZaBrzoZakazivanje= ocenaKlinikeZaBrzoZakazivanje;

        this.salaNaziv= salaNaziv;

        this.cenaBezPopusta = cenaBezPopusta;
    }

}