import fs from "fs";
import ValasztasiEredmeny from "./ValasztasiEredmeny";

export default class Megoldás {
    // adattagok
    #ve: ValasztasiEredmeny[] = [];

    constructor(allomanyNeve: string) {
        const temp: string = fs.readFileSync(allomanyNeve).toString().split("\n");
        
        // for (const sor of fs.readFileSync(allomanyNeve).toString().split("\n"))
    }
}
