/* jshint esversion: 6 */

class Adresse {

    constructor(ort, str) {
        this._ort = ort;
        this._strasse = str;
    }

    toString() {
        return this._ort + ", " + this._strasse;
    }
}

