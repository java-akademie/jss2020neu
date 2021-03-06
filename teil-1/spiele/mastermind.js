
/* jshint esversion: 6 */

let zufallszahl = 0;
let konsole = "";
let versuche = 0;

function start() {
    document.getElementById("message").innerHTML = "";
    versuche = 0;
    zufallszahl = "";
    for (let i = 1; i <= 5; i++)
        zufallszahl = zufallszahl + "" + Math.floor(Math.random() * (10));

    konsole = "Spiel gestartet, bitte eine 5-stellige Zahl eingeben <br />";
    document.getElementById("konsole").innerHTML = konsole;
    document.getElementById("eingabe").value = "";

    document.getElementById("start").disabled = "disabled";
    document.getElementById("stopp").disabled = "";
    document.getElementById("rechnen").disabled = "";
    document.getElementById("eingabe").disabled = "";
    document.getElementById("help").disabled = "";
}

function help() {
    document.getElementById("message").innerHTML = zufallszahl;
    versuche = 99;
}

function stopp() {
    document.getElementById("message").innerHTML = "";
    konsole = konsole + "Spiel beendet, die Zahl war " + zufallszahl + "<br />";
    document.getElementById("konsole").innerHTML = konsole;
    konsole = "";
    document.getElementById("eingabe").value = "";

    document.getElementById("stopp").disabled = "disabled";
    document.getElementById("start").disabled = "";
    document.getElementById("help").disabled = "disabled";
    document.getElementById("rechnen").disabled = "disabled";
    document.getElementById("eingabe").disabled = "disabled";
}

function eingabeOk(s) {
    // 5-stellig, alle muessen numerisch sein
    if (s.length !== 5)        return false;
    return allInteger(s);
}

function rechnen() {
    document.getElementById("message").innerHTML = " ";

    let eingabe = document.getElementById("eingabe");

    eingabe = eingabe.value;

    if (!eingabeOk(eingabe)) {
        document.getElementById("message").innerHTML = " eingabe falsch ...";
        return;
    }

    versuche++;

    konsole = konsole + check(zufallszahl, eingabe) + " " +
        versuche + ".Versuch  " + "<br />";
    document.getElementById("konsole").innerHTML = konsole;
}

function check(z, e) {
    if (z === e) {
        document.getElementById("eingabe").value = "";

        document.getElementById("stopp").disabled = "disabled";
        document.getElementById("start").disabled = "";
        document.getElementById("rechnen").disabled = "disabled";
        document.getElementById("eingabe").disabled = "disabled";

        return e + "<br />" + "*****  GEWONNEN";
    }

    z = "" + z;
    e = "" + e;
    let zarr = z.split("");
    let earr = e.split("");
    let erg1 = "";
    let erg2 = "";
   // let i = 0, j = 0;
    for (let i = 0; i < 5; i++) {
        if (zarr[i] === earr[i]) {
            erg1 = erg1 + "*";
            zarr[i] = "";
            earr[i] = "";
        }
    }

    for (let i = 0; i < 5; i++) {
        if (zarr[i] !== "") {
            for (let j = 0; j < 5; j++) {
                if (zarr[i] === earr[j]) {
                    erg2 = erg2 + "0";
                    earr[j] = "";
                    break;
                }
            }
        }
    }

    let erg = erg1 + erg2;

    while (erg.length < 5) {
        erg += ".";
    }

    return e + "<br />" + erg;
}
