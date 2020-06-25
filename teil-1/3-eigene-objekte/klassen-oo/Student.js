
/* jshint esversion: 6 */

class Student extends Person {

    constructor(name, addr, matrikelnummer) {
        super(name, addr);
        this._matrikelnummer = matrikelnummer;
    }

    toString() {
        return super.toString() +
            (this._matrikelnummer === undefined ?
                "na-matrikelnummer" : this._matrikelnummer);
    }
}
