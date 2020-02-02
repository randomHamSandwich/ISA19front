export class LekarFilterDodatni {
    ocenaLekarMIN: string;
    ocenaLekarMAX: string;
    imeLekar :string;
    prezimeLekar: string;


    constructor(ocenaLekarMIN: string,ocenaLekarMAX: string
        ,  imeLekar: string, prezimeLekar: string) {
        this.ocenaLekarMIN = ocenaLekarMIN;
        this.ocenaLekarMAX = ocenaLekarMAX;
        this.imeLekar = imeLekar;
        this.prezimeLekar = prezimeLekar;
       
    }

}


