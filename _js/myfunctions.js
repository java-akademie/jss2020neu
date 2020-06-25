/* jshint esversion: 6 */

/**
 * nur waehrend der Entwicklungsphase
 */
let fehler = "";
let count = 0;
window.onerror = function (message,
                           source,
                           lineno,
                           colno,
                           error) {
    count++;
    console.log(count, message, source, lineno, colno, error);
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

    console.log(name + " :: " + typeof (value) + " :: " + value);
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
    document.write(ausdruck + " :: " + typeof (erg) + " :: " + erg + "<br />");
}


/**
 * ausgeben einer Zeile
 */
function writeln(text) {
    document.write(text + "<br />");
}


/**
 * Ausgabe Binärwert eines Dezimalwertes
 * 64-stellig mit vorlaufenden Punkten    z.B. ........110100101
 */
function binaerwertAusgeben(dezwert) {
    let binaerwert = dezwert.toString();
    let punkte = "";
    for (let i = 1; i <= 64 - binaerwert.length; i++) {
        punkte = punkte + ".";
    }
    let outp = punkte + binaerwert;
    writeln("<code>" + outp + "  " +
        binaerwert.length + " " + dezwert + "</code>");
}

/**
 * Ausgabe dreier Binärwerte mit Überschrift
 */
function binAusg3(ueb, a, b, c) {
    ueberschrift(ueb);
    writeln("<code>" + ".........x.........x.........x.........x.........x.........x...." +
        "</code>");
    binaerwertAusgeben(a);
    binaerwertAusgeben(b);
    binaerwertAusgeben(c);
}

/**
 * Gegenüberstellung Binärwerte mit
 * umgekehrten Bits
 */
function binAusg2(ueb, vz) {
    ueberschrift(ueb);
    writeln("<code>" + ".........x.........x.........x.........x.........x.........x...." +
        "</code>");
    for (let i = 0; i < 5; i++) {
        binaerwertAusgeben(i * vz);
        binaerwertAusgeben(~(i * vz));
        writeln("");
    }
}


/**
 * schreiben einer Ueberschrift <h1> bis <h5> Zeile
 */
function writehx(text, i = 5) {
    if (!checkInteger(i) || i < 1 || i > 5)
        i = 5;

    document.write("<h" + i + ">" + text + "</h" + i + ">");
}