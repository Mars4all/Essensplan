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
   $("#neu1").hide();
   $("#neu2").hide();
   $("#neu3").hide();
   $("#neu4").hide();
   $("#neu5").hide();
   $("#neu6").hide();
   $("#neu7").hide();


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

  
   


$("#Essenmachen").mouseup(function() {

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
   $("#neu1").show();
   $("#neu2").show();
   $("#neu3").show();
   $("#neu4").show();
   $("#neu5").show();
   $("#neu6").show();
   $("#neu7").show();

   //// neuer Button erscheint
   $("#Essenmachen2").show();



        
 /// einzelne Gerichte neu erstellen
         //////////////////////////////////////////////////////////////////////////////////////

         $("#neu1").mouseup(function() 
         {
            Montag = Math.random() *liste;
            Montag1 = Math.round(Montag);
            $("#Essen1").html(Essenplan[Montag1]);
         });

         $("#neu2").mouseup(function() 
         {
            Dienstag = Math.random() *liste;
            Dienstag1 = Math.round(Dienstag);
            $("#Essen2").html(Essenplan[Dienstag1]);
         });

         $("#neu3").mouseup(function() 
         {
            Mittwoch = Math.random() *liste;
            Mittwoch1 = Math.round(Mittwoch);
            $("#Essen3").html(Essenplan[Mittwoch1]);
         });

         $("#neu4").mouseup(function() 
         {
            Donnerstag = Math.random() *liste;
            Donnerstag1 = Math.round(Donnerstag);
            $("#Essen4").html(Essenplan[Donnerstag1]);
         });

         $("#neu5").mouseup(function() 
         {
            Freitag = Math.random() *liste;
            Freitag1 = Math.round(Freitag);
            $("#Essen5").html(Essenplan[Freitag1]);
         });

         $("#neu6").mouseup(function() 
         {
            Samstag = Math.random() *liste;
            Samstag1 = Math.round(Samstag);
            $("#Essen6").html(Essenplan[Samstag1]);
         });

         $("#neu7").mouseup(function() 
         {


            Sonntag = Math.random() *liste;
            Sonntag1 =  Math.round(Sonntag);
            $("#Essen7").html(Essenplan[Sonntag1]);
         
         });

    }


   

});



///////////////////////////////////////////////////////////////////////////////////////

$("#Essenmachen2").mouseup(function() {

   while (Montag1 == Dienstag1 && Dienstag1 == Mittwoch1 && Mittwoch1 == Donnerstag1 && Donnerstag1 == Freitag1 && Freitag1 == Samstag1
         
      && Samstag1 == Sonntag1 && Sonntag1 == Montag1 && Montag1 == Mittwoch1 && Montag1 == Donnerstag1 && Montag1 == Freitag1
     
      && Montag1 == Samstag1 
      
      && Dienstag1 == Donnerstag1 && Dienstag1 == Freitag1 && Dienstag1 == Samstag1 && Dienstag1 == Sonntag1
      
      && Mittwoch1 == Freitag1 && Mittwoch1 == Samstag1 && Mittwoch1 == Sonntag1

      && Donnerstag1 == Samstag1 && Donnerstag1 == Sonntag1
      
      && Freitag1 == Sonntag1 )  
      
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
derPlaneinzeln();

$("#Essenmachen").html("Erstelle noch einen Plan!")
});
});
