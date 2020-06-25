/* jshint esversion: 6 */

function Adresse(ort, strasse) {
    // ----------------
    // Attribute
    // ----------------
    this.ort = ort;
    this.strasse = strasse;

    // ----------------
    // anonyme Methoden         
    // ----------------
    this.toString = () => {
        let s = "";
        s += (this.ort === undefined ? "ort-na" : this.ort) + " / ";
        s += (this.strasse === undefined ? "strasse-na" : this.strasse);
        return s;
    };
    this.adresseToString = this.toString;
}