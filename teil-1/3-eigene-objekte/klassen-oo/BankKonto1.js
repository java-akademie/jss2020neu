/* jshint esversion: 6 */

class BankKonto {

    constructor(inhaber) {
        this.setInhaber(inhaber);
        this._saldo = 0;
    }

    setInhaber(inhaber) {
        // hier kann inhaber geprueft werden
        this._inhaber = inhaber;
    }

    getInhaber() {
        return this._inhaber;
    }

    getSaldo() {
        return this._saldo;
    }

    toString() {
        return this._inhaber + " :: " + this._saldo;
    }

    einzahlen(betrag) {
        // betrag sollte geprueft werden
        this._saldo += betrag;
    }

    abheben(betrag) {
        // betrag sollte geprueft werden
        if (this._saldo < betrag) {
            return false;
        } else {
            this._saldo -= betrag;
            return true;
        }
    }
}
