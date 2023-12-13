export default class ValasztasiEredmeny {
    // Láthatósági szintek
    // - public alapértelmezés
    // - private: # - karakter jelzi a tag azonosítója elején
    // - protected: ki kell írni - a leszármazott osztály is használhatja

    // adattagok, illik private láthatósági szinttel létrehozni őket
    #kerulet: number;
    #szavazatok: number;
    #vezetekNev: string;
    #keresztNev: string;
    #partJel: string;

    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this.#kerulet = parseInt(m[0]);
        this.#szavazatok = parseInt(m[1]);
        this.#vezetekNev = m[2];
        this.#keresztNev = m[3];
        this.#partJel = m[4];
    }
}
