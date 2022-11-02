$(document).ready(function() {

   //// Welches Gereicht ausblenden
   $("#Essen2").hide();
   $("#Essen3").hide();
   $("#Essen4").hide();
   $("#Essen5").hide();
   $("#Essen6").hide();
   $("#Essen7").hide();
   $("#Essenmachen2").hide();
   

   //// Welcher Tag ausblenden
   $("#Essen2row2").hide();
   $("#Essen3row3").hide();
   $("#Essen4row4").hide();
   $("#Essen5row5").hide();
   $("#Essen6row6").hide();
   $("#Essen7row7").hide();

   /// neu generieren ausblenden
   $("#neu2").hide();
   $("#neu3").hide();
   $("#neu4").hide();
   $("#neu5").hide();
   $("#neu6").hide();
   $("#neu7").hide();

   // Essensplan ausblenden
   $("#Plan").hide();
   $("#Plan1").hide();
   $("#Plan2").hide();
   $("#Plan3").hide();
   $("#Plan4").hide();
   $("#Plan5").hide();
   $("#Plan6").hide();
   $("#Plan7").hide();



let liste = 49;

let Essenplan = [
"Frikasse",
 "Wrap",
 "Taco",
 "Döner",
 "Bratkartoffeln",
"Salat mit Hähnchen",
 "Klops mit Kartoffeln",
"Suppe",
 "Kassler",
"Königsberger",
 "Nudeln mit Tomatensoße",
"Käsenudeln",
"Yammi Salat",
"Gulasch mit Nudeln",
"Gulasch mit Kartoffeln",
"Klöße mit Hähnchen",
"Diät Pizza",
"Diät Bürger",
"Blumenkohl Grießbrei",
"Grillen",
"Pfannkuchen",
"Schnitzel",
"Curry Wurst",
"Hacksteak",
"Asiatisch",
"Reispfanne",
"Tessapfanne",
"selbstgemachtes Subway",
"Würstchen mit Kartoffelsalat",
"Pommesauflauf",
"Gyros",
"Gemüseauflauf",
"Spargelauflauf",
"Balkanbemme",
"Sandwichburger",
"Sandwich",
"Kartoffelpuffer",
"Gehacktesstippe",
"Pilzpfanne",
"Lasagne",
"Jagdwurst",
"Spinat",
"Chili Con Carne",
"Käsesuppe",
"Schaschlick",
"Paprikaschote",
 "Pesto mit Nudeln",
 "Fertiggericht Tiefkühl",
 "Parmesan Kartoffeln nach Tik Tok Art",
"Aufgeräumter Kühlschrank"

]

let Einkaufszettel = [
   "Frikasse und Kartoffel",
    "Wrap Fleisch und Salat sowie So0e",
    "Taco Fleisch und Salat sowie Soße",
    "Döner",
    " Kartoffeln",
   "Salat und Hähnchen",
    "Gehacktes mit Kartoffeln",
   "Suppe",
    "Kassler mit Kartoffeln Soße und Beilage",
   "Königsberger und Kartoffeln",
    "Nudeln und Tomatensoße und Würstchen",
   "Nudeln Gemüse und Käse",
   "Yammi Salat , Fleisch, Chinakohl, Pinienkerne",
   "Gulasch und Nudeln sowie Pilze",
   "Gulasch und Kartoffeln sowie Pilze",
   "Klöße mit Hähnchen, Soße und Rotkohl",
   "Quark, Käse Eis, Tomatenmark, Wurst und Käse",
   "Quark, Käse, Eis, Senf und Ketchup, Gechacktes und Zwiebeln",
   "Blumenkohl Grießbrei Googeln",
   "Fleisch zum Grillen, Grillsoße",
   "Ei, Milch, Mehl, Backpulver",
   "Schnitzel, Kartoffeln, Soße, Beilage",
   "Bockwurst, Pommes, Curry Soße und Pommes Soße",
   "Gehacktes, Kartoffeln und Soße",
   "Asiatische Nudeln und Soße, oder Reis",
   "Reis , Gemüse und evtl Fleisch",
   "versch. Gemüse und Fetakäse",
   "Buguette, Käse, Wurst, Salat Soße ",
   "Würstchen und Kartoffelsalat",
   "Pommes , Kartoffel mal anders und Käse",
   "Gyros, Pommes, Krautsalat",
   "Gemüse , Holondaise und Köse",
   "Spargelauflauf Holondaise und Käse",
   "Gehacktes und Brot",
   "Sandwich, Gehacktes, Salat und Hamburgersoße",
   "Sandwich Salat, Sandwichs0ße und Wurst",
   "Kartoffel Zwiebel, Mehl, Zucker und Eier",
   "Gehacktes, Soße und Kartoffeln",
   "Pilz, Milch und Zwiebeln , Kartoffeln",
   "Lasagne",
   "Jagdwurst , Kartoffelbrei, Zwiebeln",
   "Spinat, Ei und Kartoffeln",
   "Chili Soße, Reis, Gehacktes und Mais (evtl. Kidney Bohnen)",
   "Lauch, Zwiebel, Knoblauch, Rapsöl, 250g gem. Hach, Gemüsebrühe, Schmelzkäse (Sahne und Kräuter), Schnittlauch",
   "Fleisch , Spieße, Paprika und Zwiebeln",
   "Paprika, Gehacktes, Kartoffeln, Soße",
    "Pesto, Nudeln, Pinienkerne",
    "Fertiggericht Tiefkühl",
    "Parmesan, Kartoffeln, Knoblauch, Pflanzenöl, Pfeffer, Sour Cream ",
   "Aufgeräumter Kühlschrank"
   
   ]


   let Montag = Math.random() *liste;
   let Montag1 = Math.round(Montag);
   let Dienstag = Math.random() *liste;
   let Dienstag1 = Math.round(Dienstag);
   let Mittwoch = Math.random() *liste;
   let Mittwoch1 = Math.round(Mittwoch);
   let Donnerstag = Math.random() *liste;
   let Donnerstag1 = Math.round(Donnerstag);
   let Freitag = Math.random() *liste;
   let Freitag1 = Math.round(Freitag);
   let Samstag = Math.random() *liste;
   let Samstag1 = Math.round(Samstag);
   let Sonntag = Math.random() *liste;
   let Sonntag1 =  Math.round(Sonntag);
   let Woche =[Montag1, Dienstag1, Mittwoch1, Donnerstag1, Freitag1, Samstag1, Sonntag1]

  
   


$("#Essenmachen").mouseup(function sortessen() {

   //// Vermeidung von einer Doppelten Speise

   while (Montag1 == Dienstag1 || Dienstag1 == Mittwoch1 || Mittwoch1 == Donnerstag1 || Donnerstag1 == Freitag1 || Freitag1 == Samstag1
         
          || Samstag1 == Sonntag1 || Sonntag1 == Montag1 || Montag1 == Mittwoch1 || Montag1 == Donnerstag1 || Montag1 == Freitag1
         
          || Montag1 == Samstag1 
          
          || Dienstag1 == Donnerstag1 || Dienstag1 == Freitag1 || Dienstag1 == Samstag1 || Dienstag1 == Sonntag1
          
          || Mittwoch1 == Freitag1 || Mittwoch1 == Samstag1 || Mittwoch1 == Sonntag1

          || Donnerstag1 == Samstag1 || Donnerstag1 == Sonntag1
          
          || Freitag1 == Sonntag1  )  
          
          {
       
       Montag = Math.random() *liste;
       Montag1 = Math.round(Montag);
       Dienstag = Math.random() *liste;
       Dienstag1 = Math.round(Dienstag);
       Mittwoch = Math.random() *liste;
       Mittwoch1 = Math.round(Mittwoch);
       Donnerstag = Math.random() *liste;
       Donnerstag1 = Math.round(Donnerstag);
       Freitag = Math.random() *liste;
       Freitag1 = Math.round(Freitag);
       Samstag = Math.random() *liste;
       Samstag1 = Math.round(Samstag);
       Sonntag = Math.random() *liste;
       Sonntag1 =  Math.round(Sonntag);

   }
   derPlan();
   //// Function zum Speisenplan
   
   function derPlan() {
      
      ///// Hier wird der Essensplan Dargestellt
   $("#Essen1").html(Essenplan[Montag1]);
   $("#Essen2").html(Essenplan[Dienstag1]);
   $("#Essen3").html(Essenplan[Mittwoch1]);
   $("#Essen4").html(Essenplan[Donnerstag1]);
   $("#Essen5").html(Essenplan[Freitag1]);
   $("#Essen6").html(Essenplan[Samstag1]);
   $("#Essen7").html(Essenplan[Sonntag1]);


 ///// Hier wird der Einkaufszettel Dargestellt

   $("#Plan1").html(Einkaufszettel[Montag1]);
   $("#Plan2").html(Einkaufszettel[Dienstag1]);
   $("#Plan3").html(Einkaufszettel[Mittwoch1]);
   $("#Plan4").html(Einkaufszettel[Donnerstag1]);
   $("#Plan5").html(Einkaufszettel[Freitag1]);
   $("#Plan6").html(Einkaufszettel[Samstag1]);
   $("#Plan7").html(Einkaufszettel[Sonntag1]);



   /////// Tabelle mit Speisen erscheinen lassen

   $("#Essen2").show();
   $("#Essen3").show();
   $("#Essen4").show();
   $("#Essen5").show();
   $("#Essen6").show();
   $("#Essen7").show();

   //// Welcher Tag einblenden
   $("#Essen2row2").show();
   $("#Essen3row3").show();
   $("#Essen4row4").show();
   $("#Essen5row5").show();
   $("#Essen6row6").show();
   $("#Essen7row7").show();


   /// neu generieren einblenden
   $("#neu2").show();
   $("#neu3").show();
   $("#neu4").show();
   $("#neu5").show();
   $("#neu6").show();
   $("#neu7").show();

 /// Einkaufszettel einblenden
   $("#Plan").show();
   /*$("#Plan1").show();
   $("#Plan2").show();
   $("#Plan3").show();
   $("#Plan4").show();
   $("#Plan5").show();
   $("#Plan6").show();
   $("#Plan7").show();*/

   //// neuer Button erscheint
   $("#Essenmachen2").show();



        
 /// einzelne Gerichte neu erstellen
         //////////////////////////////////////////////////////////////////////////////////////

         $("#neu1").mouseup(function() 
         {
          
            Montag = Math.random() *liste;
            Montag1 = Math.round(Montag);
            $("#Essen1").html(Essenplan[ Montag1]);
            $("#Plan1").html(Einkaufszettel[Montag1]);
            
         });

         $("#neu2").mouseup(function() 
         {
            Dienstag = Math.random() *liste;
            Dienstag1 = Math.round(Dienstag);
            $("#Essen2").html(Essenplan[Dienstag1]);
            $("#Plan2").html(Einkaufszettel[Dienstag1]);
         });

         $("#neu3").mouseup(function() 
         {
            Mittwoch = Math.random() *liste;
            Mittwoch1 = Math.round(Mittwoch);
            $("#Essen3").html(Essenplan[Mittwoch1]);
            $("#Plan3").html(Einkaufszettel[Mittwoch1]);
         });

         $("#neu4").mouseup(function() 
         {
            Donnerstag = Math.random() *liste;
            Donnerstag1 = Math.round(Donnerstag);
            $("#Essen4").html(Essenplan[Donnerstag1]);
            $("#Plan4").html(Einkaufszettel[Donnerstag1]);
         });

         $("#neu5").mouseup(function() 
         {
            Freitag = Math.random() *liste;
            Freitag1 = Math.round(Freitag);
            $("#Essen5").html(Essenplan[Freitag1]);
            $("#Plan5").html(Einkaufszettel[Freitag1]);
         });

         $("#neu6").mouseup(function() 
         {
            Samstag = Math.random() *liste;
            Samstag1 = Math.round(Samstag);
            $("#Essen6").html(Essenplan[Samstag1]);
            $("#Plan6").html(Einkaufszettel[Samstag1]);
         });

         $("#neu7").mouseup(function() 
         {


            Sonntag = Math.random() *liste;
            Sonntag1 =  Math.round(Sonntag);
            $("#Essen7").html(Essenplan[Sonntag1]);
            $("#Plan7").html(Einkaufszettel[Sonntag1]);
         
         });

         //////////////// Einkaufsliste entfernen

         
      deletehide();

    }


   

});



///////////////////////////////////////////////////////////////////////////////////////

$("#Essenmachen2").mouseup(function (){

   while (Montag1 == Dienstag1 && Dienstag1 == Mittwoch1 && Mittwoch1 == Donnerstag1 && Donnerstag1 == Freitag1 && Freitag1 == Samstag1
         
      && Samstag1 == Sonntag1 && Sonntag1 == Montag1 && Montag1 == Mittwoch1 && Montag1 == Donnerstag1 && Montag1 == Freitag1
     
      && Montag1 == Samstag1 
      
      && Dienstag1 == Donnerstag1 && Dienstag1 == Freitag1 && Dienstag1 == Samstag1 && Dienstag1 == Sonntag1
      
      && Mittwoch1 == Freitag1 && Mittwoch1 == Samstag1 && Mittwoch1 == Sonntag1

      && Donnerstag1 == Samstag1 && Donnerstag1 == Sonntag1
      
      && Freitag1 == Sonntag1 )  
      
      {
   
   x = Math.random() *liste;
   x1 = Math.round(x);
  


}
derPlan();
derPlaneinzeln();

$("#Essenmachen").html("Erstelle noch einen Plan!")
});


//////////////// Funktionen

function deletehide() {

   

   $("#del1").mouseup(function() 
   {
     
      $("#delhide1").hide();
   });

   $("#del2").mouseup(function() 
   {
      
      $("#delhide2").hide();

   });

   $("#del3").mouseup(function() 
   {
     
      $("#delhide3").hide();
   });

   $("#del4").mouseup(function() 
   {
      
      $("#delhide4").hide();
   });

   $("#del5").mouseup(function() 
   {
     
      $("#delhide5").hide();
   });

   $("#del6").mouseup(function() 
   {
      $("#delhide6").hide();
   });

   $("#del7").mouseup(function() 
   {
      $("#delhide7").hide();
   
   });
}
forS ();
function forS (){
   
   
   var i = 1; 
   let length = Essenplan.length;
   for ( i; i <= 7; i++) {console.log(Essenplan[i]);
      
      $("#Plan"+i).show();
   }

   

}


});
