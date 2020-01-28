export class Operacija {

    idOperacija: number;
    vremePocetka: string;
    vremeZavrsetka: string;
    ocenaKlinke: number;
    ocenaLekara: number;

    constructor(
        idOperacija: number,
        vremePocetka: string,
        vremeZavrsetka: string,
        ocenaKlinke: number,
        ocenaLekara: number){
            
            this.idOperacija = idOperacija;
            this.vremePocetka = vremePocetka;
            this.vremeZavrsetka = vremeZavrsetka;
            this.ocenaKlinke = ocenaKlinke;
            this.ocenaLekara = ocenaLekara;

        }

}