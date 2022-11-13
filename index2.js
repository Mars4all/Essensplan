$(document).ready(function() {

/// Kartoffeln 2,5 kf, Nudeln Spaghetti Trinken das Billigste Wasser 1,5 l im 6er Träger Wurst ist Salami Milch 1.5 Fett Eier sind 6er


//////// Preise Kaufland

let KMehl = 0.79;
let KMilch = 0.99;
let KWurst = 1.49;
let KTrinken = 6*0.25;
let KEier = 1.85;
let KKartoffeln = 2.29;
let KNudeln = 0.99;

////////// Preise Aldi

let AMehl = 0.89;
let AMilch = 0.99;
let AWurst = 1.59;
let ATrinken = 6*0.25;
let AEier = 1.39;
let AKartoffeln = 2.19;
let ANudeln = 0.99;

////////// Preise Edeka

let EMehl = 0.79;
let EMilch = 0.99;
let EWurst = 1.69;
let ETrinken = 6*0.33;
let EEier = 1.99;
let EKartoffeln = 1.99;
let ENudeln = 0.99;

////////// Preise REWE

let RMehl = 0.89;
let RMilch = 0.99;
let RWurst = 1.69;
let RTrinken = 6*0.25;
let REier = 1.59;
let RKartoffeln = 2.09;
let RNudeln = 0.99;


//////// Preise Lidl

let LMehl = 0.99;
let LMilch = 0.99;
let LWurst = 1.59;
let LTrinken = 6*0.25;
let LEier = 1.88 ;
let LKartoffeln = 1.99;
let LNudeln = 0.89;

/////////////////////////////////////////////////////////////

//// Globale Variablen

let Kaufland;
let Lidl;
let REWE;
let Aldi;
let Edeka;

//////////////// ausblendem

$("#Aldi").hide();
$(".REWE").hide();
$(".Edeka").hide();
$(".Lidl").hide();
$(".Kaufland").hide();

//// wer ist am günstigsten


//// Kaufland
let GesamtK = KMehl + KMilch + KWurst + KTrinken + KEier + KKartoffeln + KNudeln;


//// Lidll
let GesamtL = LMehl + LMilch + LWurst + LTrinken + LEier + LKartoffeln + LNudeln;

//// REWE
let GesamtR = RMehl + RMilch + RWurst + RTrinken + REier + RKartoffeln + RNudeln;

//// Aldi
let GesamtA = AMehl + AMilch + AWurst + ATrinken + AEier + AKartoffeln + ANudeln;


//// Edeka
let GesamtE = EMehl + EMilch + EWurst + ETrinken + EEier + EKartoffeln + ENudeln;


//// die Liste





let liste = [GesamtK ,GesamtL  ,GesamtR  ,GesamtA  ,GesamtE];

//// Werte direkt zuweisen
Kaufland = liste[0];
Lidl = liste[1];
REWE = liste[2];
Aldi = liste[3];
Edeka = liste[4];


/// Funktionen

function Daten_uebermittelnaldi(){
    $(".Aldi").html(" Aldi <br> Testkauf  = "+ Aldi+"€.");

}

function Daten_uebermittelnedeka(){
    $("#Edeka").html(" Edeka <br> Testkauf  = "+ Edeka +"€.");

}

function Daten_uebermittelnREWE(){
    $("#REWE").html(" REWE <br> Testkauf  = "+ REWE +"€.");

}

function Daten_uebermittelnKaufland(){
    $("#Kaufland").html(" Kaufland <br> Testkauf  = "+ Kaufland +"€.");

}

function Daten_uebermittelnLidl(){
    $("#Lidl").html(" Lidl <br> Testkauf  = "+ Lidl +"€.");

}

function Preisvergleich() {


    if(Aldi <= REWE && Aldi <= Edeka && Aldi <= Lidl && Aldi <= Kaufland )
    {

        
        $(".Aldib").css("background-color", "green");
        
    }

    if(Edeka <= REWE && Edeka <= Aldi && Edeka <= Lidl && Edeka <= Kaufland )
    {

        
        $(".Edeka").css("background-color", "green");
    }


    if(REWE <= Edeka && REWE <= Aldi && REWE <= Lidl && REWE <= Kaufland )
    {

        
        $(".REWE").css("background-color", "green");
    }

    if(Lidl <= Edeka && Lidl <= Aldi && Lidl <= REWE && Lidl <= Kaufland )
    {

        
        $(".Lidl").css("background-color", "green");
    }

    if( Kaufland <= Edeka && Kaufland <= Aldi && Kaufland <= REWE && Kaufland <= Lidl )
    {

        
        $(".Kaufland").css("background-color", "green");
    }
}

function erscheinenAldi(){
    $(".Aldib").css("background-color", "gray");
    $("#Aldi").show();
}

function erscheinenREWE(){
    $(".REWE").css("background-color", "gray");
    $(".REWE").show();
}

function erscheinenEdeka(){
    $(".Edeka").css("background-color", "gray");
    $(".Edeka").show();
}

function erscheinenKaufland(){
    $(".Kaufland").css("background-color", "gray");
    $(".Kaufland").show();
}

function erscheinenLidl(){
    $(".Lidl").css("background-color", "gray");
    $(".Lidl").show();
}


$("#Vergleich_erstellen").mouseup(function () {



console.log(liste);

$("#ueberschrift").html("Preisvergleich");

Daten_uebermittelnedeka();
Daten_uebermittelnaldi();
Daten_uebermittelnREWE();
Daten_uebermittelnKaufland();
Daten_uebermittelnLidl();
erscheinenAldi();


setTimeout(erscheinenREWE, 500);
setTimeout(erscheinenEdeka, 1000);
setTimeout(erscheinenLidl, 1500);
setTimeout(erscheinenKaufland, 2000);

Preisvergleich();

});

});