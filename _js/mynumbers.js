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