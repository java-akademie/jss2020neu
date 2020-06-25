
/* jshint esversion: 6 */

class Person {

    constructor(name, addr) {
        this._name    = name;
        this._adresse = addr;
    }

    toString() {
        let s = "";
        s += (this._name    === undefined ? "na-name"    : this._name)    + " / ";
        s += (this._adresse === undefined ? "na-adresse" : this._adresse) + " / ";
        return s;
    }
}
