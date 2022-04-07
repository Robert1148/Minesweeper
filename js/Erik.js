function hoehe(){
    window.value=Math.sqrt(feldgröße);//Deklaration Höhe (öffentliche Variable) mit Window Object (ES)
}
function breite(){
    window.value=Math.sqrt(feldgröße);//Deklaration Breite (öffentliche Variable) mit Window Object (ES)
}





//Deklaration der Felder + welche Funktionen werden auf  die Felder angewendet (ES)
var felder = {};
function felder(feldGroeße, minendichte) {
    for (var hoehe = 0; hoehe <= Math.sqrt(feldGroeße); hoehe ++) {
        for (var breite = 0; breite <= Math.sqrt(feldGroeße); breite ++) {
            felder[hoehe + "" + breite] = zelle(hoehe, breite, false, false, false, 0);
        }
    }
    felder = zufaelligeGenerationMinen(felder, minendichte);
    //Diese Variable muss noch deklariert werden (ES)
    felder = berechneZahlenAngrenzendeMinen(felder, feldGroeße);
    return felder;
}

//zufällige Generation Minen mit Ausgabe an die Felder (ES)
var mine = 0;

function zufälligeGenerationMinen(felder, minendichte) {
    var minenKoordinaten = [];
    for (var i = 0; i <= minendichte; i++) {
        var zufälligeReihenKoordinate = getRandomInteger(0, feldGröße);
        var zufälligeSpaltenKoordinate = getRandomInteger(0, felder);
        var zelle = zufälligeReihenKoordinate + "" + zufälligeSpaltenKoordinate;
        while (minenKoordinaten.includes(zelle)) {
            zufälligeReihenKoordinate = getRandomInteger(0, feldGröße);
            zufälligeSpaltenKoordinate = getRandomInteger(0, felder);
            zelle = zufälligeReihenKoordinate + "" + zufälligeSpaltenKoordinate;
        }
        minenKoordinaten.push(zelle);
        felder[zelle].mine = true;
    }
    return felder;
}




//Zusatzfunktion Anpassung Feldgröße (ES)
var feldGroeße;
feldGroeße = hoehe*breite;
hoehe = breite;

function feldGroeße(kleinesFeld, mittleresfeld) {
    var kleinesFeld = {};
    function kleinesFeld (hoehe, breite) {
        for (let hoehe = 0; hoehe < 9; hoehe ++) {
            for (let breite = 0; breite < 9; breite ++) {
                console.log(felder[hoehe + "" + breite].push);
            }
        }
    }
    var mittleresFeld = {};
    function mittleresFeld (hoehe, breite) {
        for (let hoehe = 0; hoehe < 16; hoehe ++) {
            for (let breite = 0; breite < 16; breite ++) {
                console.log(felder[hoehe + "" + breite].push);
            }
        }
    }
}




//Zusatzfunktion Minendichte (ES)
var minendichte;
function minendichte(einfacherSchwierigkeitsgrad, mittlererSchwierigkeitsgrad, hoherSchwierigkeitsgrad) {
    var m = 0;
    var einfacherSchwierigkeitsgrad;
    function einfacherSchwierigkeitsgrad(zufälligeGenerationMinen, minen) {
        do {
            zufälligeGenerationMinen.push;
            m + 1;
            console.log(minen={});
        } while (m < hoehe * 2);
    }
    var mittlererSchwierigkeitsgrad;
    function mittlererSchwierigkeitsgrad(zufälligeGenerationMinen, minen) {
        do {
            zufälligeGenerationMinen
            m + 1;
            console.log(minen={});
        } while (m < hoehe * 4);
    }
    var hoherSchwierigkeitsgrad;
    function hoherSchwierigkeitsgrad(zufälligeGenerationMinen, minen) {
        do {
            zufälligeGenerationMinen
            m + 1;
            console.log(minen={});
        } while (m < hoehe * 6);
    }
}