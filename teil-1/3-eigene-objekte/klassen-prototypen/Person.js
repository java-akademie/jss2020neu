/* jshint esversion: 6 */

function Person(name, salaer, adresse) {
    // -----------
    // Attribute
    // -----------
    this.name = name;
    this.adresse = adresse;

    if (isNaN(salaer))
        this.salaer = 0;
    else
        this.salaer = salaer;

    // ----------------
    // anonyme Methoden         
    // ----------------        
    this.setSalaer = function(salaer) {
        if (isNaN(salaer))
            this.salaer = 0;
        else
            this.salaer = salaer;
    };

    this.toString = function() {
        let s = "";
        s += (this.name === undefined ? "na.name" : this.name) + " / ";
        s += (this.salaer === 0 ? "na-salaer" : this.salaer) + " / ";
        s += (this.adresse === undefined ? "na-adresse" : this.adresse) + " / ";
        return s;
    };
    this.personToString = this.toString;
}