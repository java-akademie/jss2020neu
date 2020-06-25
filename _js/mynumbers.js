/* jshint esversion: 6 */


/**
 * Prüfen ob ein eingegebener Wert eine
 * gültige Ganzzahl ist. 
 */
function checkInteger(p) {
    const inp = p + ""; // macht aus p einen string damit trim() funktioniert
    if (inp == null || inp.trim() == "" || isNaN(inp))

        ;
    else if (Number.isInteger(inp * 1))
        return true;

    console.log(p, "not an Integer")
    return false;
}


/**
 * Prüfen ob ein eingegebener Wert eine
 * gültige Dezimalzahl ist.
 */
function checkFloat(p) {
    const inp = p + ""; // macht aus inp einen string damit trim() funktioniert
    if (inp == null || inp.trim() == "" || isNaN(inp))
    ;
    else
        return true;

    console.log(p, "not an Integer")
    return false;
}


/**
 * Prüfen ob ein eingegebener Wert
 * komplett aus Ziffern besteht
 */
function allInteger(p) {
    // Laenge muss groesser 0 sein
    // alle muessen numerisch sein
    // Nullen zu Beginn sind erlaubt (bspw: 00228)
    let ok = true;
    const inp = p + ""; // macht aus inp einen string damit trim() funktioniert
    if (inp == undefined || inp == null || inp.trim() == "")
        ok = false;
    else
        for (let i = 0; i <= inp.length; i++) {
            if (isNaN(inp.substr(i, 1))) ok = false;
        }

    if (!ok) {
        console.log(p, "not Integers")
    }

    return ok;
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
    if (!allInteger(zahl)) { return z; }
    if (!checkInteger(stellen)) { return z; }
    const vl = stellen - zahl.length;
    if (vl <= 0) { return z; }
    let vlv = "";
    for (let i = 1; i <= vl; i++) { vlv = x + vlv; }
    return vlv + zahl;
}