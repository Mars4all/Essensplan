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
"Pfannkuchen",
"Pfannkuchen",
]

function eat(){
   let Montag = Math.random() *30;
   let Montag1 = Math.round(Montag);
   let Dienstag = Math.random() *30;
   let Dienstag1 = Math.round(Dienstag);
   let Mittwoch = Math.random() *30;
   let Mittwoch1 = Math.round(Mittwoch);
   let Donnerstag = Math.random() *30;
   let Donnerstag1 = Math.round(Donnerstag);
   let Freitag = Math.random() *30;
   let Freitag1 = Math.round(Freitag);
   let Samstag = Math.random() *30;
   let Samstag1 = Math.round(Samstag);
   let Sonntag = Math.random() *30;
   let Sonntag1 =  Math.round(Sonntag);
   let Woche =[Montag1, Dienstag1, Mittwoch1, Donnerstag1, Freitag1, Samstag1, Sonntag1]

  
   
   alert("Empfehlung: " + Essenplan[Montag1]);


    
}