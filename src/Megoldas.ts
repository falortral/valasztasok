import fs from "fs";
import ValasztasiEredmeny from "./ValasztasiEredmeny";

export default class Megoldás {
    // adattagok
    #ve: ValasztasiEredmeny[] = [];

    // kódtagok:
    get jelöltekSzáma(): number {
        return this.#ve.length;
    }

    constructor(allomanyNeve: string) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // const temp: string = fs.readFileSync(allomanyNeve).toString();

        for (const sor of fs.readFileSync(allomanyNeve).toString().split("\n")) {
            const aktSor = sor.trim();
            if (aktSor.length > 0) {
                this.#ve.push(new ValasztasiEredmeny(aktSor));
            }
        }
    }
}
