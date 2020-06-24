/* jshint esversion: 6 */

/**
 * nur waehrend der Entwicklungsphase
 */
let fehler = "";
let count = 0;
window.onerror = function(message, source, lineno, colno, error) {
    count++;
    fehler = fehler + count + ". Fehler: <br />" + message + " at <br />" +
        source + "<br />lineno " + lineno + "<br /><br />";
    document.getElementById("error").innerHTML = fehler;
};


function quadrat() {
    const zahl = +window.prompt("bitte geben Sie die Zahl ein");
    const erg = zahl * zahl;
    window.alert(zahl + " hoch 2 ergibt " + erg + "!");
}


/**
 * schreiben einer Zeile in die Browser Console
 */
function log() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}


/**
 * ausgeben einer Variablen mit name, type und value
 * ausgeben("vname",vname);
 */
function ausgeben(name, value) {

    // bezeichnung soll eine feste laenge von 12 haben
    for (let i = name.length; i <= 15; i++) {
        name += " ";
    }

    console.log(name + " :: " + typeof(value) + " :: " + value);
}



/**
 * ausgeben einer fetten Überschrift
 */
function ueberschrift(text) {
    document.write("<br /><b>" + text + "</b><br />");
}

/**
 * evaluierung eines Ausdrucks
 */
function ausgebenEval(ausdruck) {
    let erg = eval(ausdruck);
    document.write(ausdruck + " :: " + typeof(erg) + " :: " + erg + "<br />");
}