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