$(document).ready(function() {

    /// Kartoffeln 2,5 kf, Nudeln Spaghetti Trinken das Billigste Wasser 1,5 l im 6er Träger Wurst ist Salami Milch 1.5 Fett Eier sind 6er
    
    
    //////// Preise Kaufland
    
    let KMehl = 0.79;
    let KMilch = 1.05;
    let KWurst = 1.79;
    let KGurke = 1.25;
    let KEier = 1.85;
    let KKartoffeln = 2.19;
    let KBrot = 1.19;
    
    ////////// Preise Aldi
    
    let AMehl = 0.79;
    let AMilch = 1.05;
    let AWurst = 1.79;
    let AGurke = 1.25;
    let AEier = 1.39;
    let AKartoffeln = 2.19;
    let ABrot = 0.99;
    
    ////////// Preise Edeka
    
    let EMehl = 0.79;
    let EMilch = 1.05;
    let EWurst = 1.79;
    let EGurke = 1.19;
    let EEier = 2.19;
    let EKartoffeln = 2.49;
    let EBrot = 1.09;
    
    ////////// Preise REWE
    
    let RMehl = 0.79;
    let RMilch = 1.05;
    let RWurst = 1.79;
    let RGurke = 0.99;
    let REier = 1.59;
    let RKartoffeln = 2.19;
    let RBrot = 1.00;
    
    
    //////// Preise Lidl
    
    let LMehl = 0.79;
    let LMilch = 1.05;
    let LWurst = 1.79;
    let LGurke = 0.99;
    let LEier = 1.89 ;
    let LKartoffeln = 2.09;
    let LBrot = 1.49;
    
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
    
    //// Preis verbergen
    
    $("#Adel").hide();
    $("#Rdel").hide();
    $("#Edel").hide();
    $("#Ldel").hide();
    $("#Kdel").hide();



   //// Kaufland  
    let GesamtK = KMehl + KMilch + KWurst + KGurke  + KEier + KKartoffeln + KBrot;
     
    
    //// Lidll
    
    let GesamtL = LMehl + LMilch + LWurst + LGurke + LEier + LKartoffeln + LBrot ;
    
    //// REWE
    
    let GesamtR = RMehl + RMilch + RWurst + RGurke + REier + RKartoffeln + RBrot;
    
    //// Aldi
    let GesamtA = AMehl + AMilch + AWurst + AGurke + AEier + AKartoffeln + ABrot;
    
    //// Edeka
    
    let GesamtE = EMehl + EMilch + EWurst + EGurke + EEier + EKartoffeln + EBrot;
    
    
    //// die Liste
    
    
    
    
    
    let liste = [GesamtK ,GesamtL  ,GesamtR  ,GesamtA  ,GesamtE];
    
    //// Werte direkt zuweisen
    Kaufland = liste[0];
    Lidl = liste[1];
    REWE = liste[2];
    Aldi = liste[3];
    Edeka = liste[4];


    ///// Preis auf 2 stellen nach dem Komma
    GesamtK = GesamtK.toFixed(2);
    GesamtL = GesamtL.toFixed(2);
    GesamtR = GesamtR.toFixed(2);
    GesamtA = GesamtA.toFixed(2);
    GesamtE = GesamtE.toFixed(2);
    
    /// Funktionen
    
    function Daten_uebermittelnaldi(){
        $(".Aldi").html(" Aldi <br> Testkauf Ergbebnis");
        $("#Adel").html( GesamtA +"€");
    }
    
    function Daten_uebermittelnedeka(){
        $("#Edeka").html(" Edeka <br>  Testkauf Ergbebnis" );
        $("#Edel").html( GesamtE +"€");
    }
    
    function Daten_uebermittelnREWE(){
        $("#REWE").html(" REWE <br> Testkauf Ergbebnis ");
        $("#Rdel").html( GesamtR +"€");
    }
    
    function Daten_uebermittelnKaufland(){
        $("#Kaufland").html(" Kaufland <br> Testkauf Ergbebnis");
        $("#Kdel").html( GesamtK +"€");
        
    }
    
    function Daten_uebermittelnLidl(){
        $("#Lidl").html(" Lidl <br> Testkauf Ergbebnis");
        $("#Ldel").html( GesamtL +"€");
    }
    
    function Preisvergleich() {
    
    
        if(Aldi <= REWE && Aldi <= Edeka && Aldi <= Lidl && Aldi <= Kaufland )
        {
    
            let y = "#Adel";
            let x =  ".Aldib";
            gruenferben(x);
            gruenferben(y);
            
        }
    
         if(Edeka <= REWE && Edeka <= Aldi && Edeka <= Lidl && Edeka <= Kaufland )
        {
    
            let y = "#Edel";
            let x = ".Edeka";
            gruenferben(x);
            gruenferben(y);
        }
    
    
        if(REWE <= Edeka && REWE <= Aldi && REWE <= Lidl && REWE <= Kaufland )
        {
    
            let y = "#Rdel";
            let x = ".REWE";
           gruenferben(x);
           gruenferben(y);
        }
    
         if(Lidl <= Edeka && Lidl <= Aldi && Lidl <= REWE && Lidl <= Kaufland )
        {
    
            let y = "#Ldel";
            let x = ".Lidl";
            gruenferben(x);
            gruenferben(y);
        }
    
        if (Kaufland <= Edeka && Kaufland <= Aldi && Kaufland <= REWE && Kaufland <= Lidl )
        {
    
             let y = "#Kdel";
             let x = ".Kaufland";
            gruenferben(x);
            gruenferben(y);
        }
    }
    
    function gruenferben(x){
        $(x).css("background-color", "green"); 
    }
    
    function erscheinenAldi(){
        //$(".Aldib").css("background-color", "gray");
        $("#Aldi").show();
        $("#Adel").show();
    }
    
    function erscheinenREWE(){
       // $(".REWE").css("background-color", "gray");
        $(".REWE").show();
        $("#Rdel").show();
    }
    
    function erscheinenEdeka(){
       // $(".Edeka").css("background-color", "gray");
        $(".Edeka").show();
        $("#Edel").show();
    }
    
    function erscheinenKaufland(){
       // $(".Kaufland").css("background-color", "gray");
        $(".Kaufland").show();
        $("#Kdel").show();
    }
    
    function erscheinenLidl(){
       // $(".Lidl").css("background-color", "gray");
        $(".Lidl").show();
        $("#Ldel").show();
    }
    
    
    $("#Vergleich_erstellen").mouseup(function () {
    
    
    
    console.log(liste + " Zeile 242");
    
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