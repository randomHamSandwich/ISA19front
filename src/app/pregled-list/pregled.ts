export class Pregled {

    idPregleda: number;
    vremePocetka: string;
    vremeZavrsetka: string;
    popust: number;
    cenaSaPopustom: number;
    ocenaLekara: number;
    ocenaKilinike: number;
    idLekara: number;

    constructor(idPregleda: number, vremePocetka: string, vremeZavrsetka: string, popust: number,
        cenaSaPopustom: number, ocenaLekara: number, ocenaKilinike: number, idLekara: number) {
        this.idPregleda = idPregleda;
        this.vremePocetka = vremePocetka;
        this.vremeZavrsetka = vremeZavrsetka;
        this.popust = popust;
        this.cenaSaPopustom = cenaSaPopustom;
        this.ocenaLekara = ocenaLekara;
        this.ocenaKilinike = ocenaKilinike;
        this.idLekara = idLekara;

    }

}