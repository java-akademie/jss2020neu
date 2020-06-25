/* jshint esversion: 6 */


/**
 * Prüfen ob ein eingegebener Wert eine
 * gültige Ganzzahl ist.
 */
function checkInteger(p) {
    let inp = p;
    if (inp === null) return false
    inp = inp + ""; // macht aus p einen string damit trim() funktioniert
    inp = inp.trim()
    if (inp === "") return false
    inp = inp * 1  // p zu number machen (wenn moeglich sonst NaN)
    if (isNaN(inp)) return false
    return Number.isInteger(inp);
}


/**
 * Prüfen ob ein eingegebener Wert eine
 * gültige Dezimalzahl ist.
 */
function checkFloat(p) {
    let inp = p
    if (inp === null) return false
    inp = inp + ""; // macht aus p einen string damit trim() funktioniert
    inp = inp.trim()
    if (inp === "") return false
    inp = inp * 1  // p zu number machen (wenn moeglich sonst NaN)
    return !isNaN(inp);
}


/**
 * Prüfen ob ein eingegebener Wert
 * komplett aus Ziffern besteht
 */
function allInteger(p) {
    // Laenge muss groesser 0 sein
    // Laenge kann beliebig lang sein
    // alle muessen numerisch sein
    // Nullen zu Beginn sind erlaubt (bspw: 00228)

    if (p === null) return false
    p = p + ""; // macht aus p einen string damit trim() funktioniert
    p = p.trim()
    if (p === "") return false

    for (let i = 0; i < p.length; i++) {
        let z = p.substr(i, 1) * 1 // soll ein number werden
        if (isNaN(z)) return false;
    }

    return true;
}


/**
 * Rückgabe einer Zufallszahl
 * im Range (von, bis)
 * ist der Range ungültig, wird eine
 * Zufallszahl zwischen 1 und 2'000'000'000
 * zurückgegeben
 */
function getZufallszahl(von, bis) {
    if (!checkInteger(von) || !checkInteger(bis)) {
        von = 1;
        bis = 2000000000;
    }


    if (von > bis) {
        von = 1;
        bis = 2000000000;
    }
    return Math.floor(Math.random() * (bis - von + 1) + von);
}

/**
 * Rückgabe einer auf "nachkommastellen" gerudeten Zahl
 * ist die übergebene Zahl ungültig, wird 0 zurück gegeben
 */
function runden(zahl, nachkommastellen) {
    if (!checkFloat(zahl)) {
        return 0;
    }

    if (!checkInteger(nachkommastellen)) {
        return 0;
    }

    let pot = Math.pow(10, nachkommastellen);
    zahl *= pot;
    zahl = Math.round(zahl);
    zahl /= pot;
    return zahl;
}

/**
 * Formatiert einen Integer auf n Stellen mit vorlaufenen x-en
 */
function form(z, stellen, x) {
    zahl = z + "";
    if (!allInteger(zahl)) {
        return z;
    }
    if (!checkInteger(stellen)) {
        return z;
    }
    const vl = stellen - zahl.length;
    if (vl <= 0) {
        return z;
    }
    let vlv = "";
    for (let i = 1; i <= vl; i++) {
        vlv = x + vlv;
    }
    return vlv + zahl;
}