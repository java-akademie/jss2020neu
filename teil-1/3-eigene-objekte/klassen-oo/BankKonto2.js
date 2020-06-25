
/* jshint esversion: 6 */

class BankKonto {

    constructor(inhaber) {
        this.setInhaber(inhaber);
        this._startSaldo = 0;
        this._buchungen = [];
    }
    getInhaber() {
        return this._inhaber;
    }
    setInhaber(inhaber) {
        // hier kann inhaber geprueft werden
        this._inhaber = inhaber;
    }
    getSaldo() {
        // saldo berechnen aus buchungen
        let saldo = this._startSaldo;
        for (let buchung of this._buchungen) {
            saldo += buchung;
        }
        return saldo;
    }

    toString() {
        return this._inhaber + " :: " + this.getSaldo();
    }

    einzahlen(betrag) {
        // betrag sollte geprueft werden
        this._buchungen.push(betrag);
    }
    abheben(betrag) {
        // betrag sollte geprueft werden
        if (this.getSaldo() < betrag) {
            return false;
        }
        else {
            this._buchungen.push(-betrag);
            return true;
        }
    }
}
