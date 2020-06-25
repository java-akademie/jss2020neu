

/* jshint esversion: 6 */

// die Superklasse der Klasse Student
Student.prototype = new Person();

// die Klasse Student
function Student(name, salaer, addr, matrikelnummer) {
    // -----------
    // Attribute
    // -----------
    this.constructor(name, salaer, addr);
    this.matrikelnummer = matrikelnummer;

    // ----------------
    // anonyme Methoden
    // ----------------
    this.toString = () => {
        let s = "";
        s += this.personToString();
        s += (this.matrikelnummer === undefined ?
            "na-matrikelnummer" : this.matrikelnummer);
        return s;
    };
    this.studentToString = this.toString;
}
