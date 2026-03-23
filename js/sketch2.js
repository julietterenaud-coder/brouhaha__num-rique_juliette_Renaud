let data;
let taille= ['grand','moyen','petit','moyen','petit','petit','moyen','petit','vide','vide','moyen','petit','moyen','petit','petit','moyen','petit','vide','vide','grand']
let angle= ['0','180','360']

function preload(){
    data = loadJSON('data.json')
}

function setup(){
	let smsListe = data.corpus.sms;
    let nbrSms = smsListe.lenght;
  console.log('nbr sms : '+smsListe.length); // affiche le nombre de sms 
  console.log(random(smsListe).cont); //affiche le premier sms
  let texte=random(smsListe).cont
  if(typeof texte == 'object'){
    texte = texte.__text;
  }
  console.log(texte);

  //let p = createP(texte);

  for (let i = 0; i < smsListe.length; i++) {
    let smsData = smsListe[i]; //const element = array[i];
    let texte=smsData.cont;
    let p=createP(texte);
    
    p.addClass(random(taille));

    let delay = random(10) 
p.style("animation-delay", delay + "s");
  }
 }
 function draw() {
  background(220);
  for (let i = 0; i < positions.length; i++) {
    let d = dist(mouseX, mouseY, positions[i].x, positions[i].y);
    if (d < 100) {
      positions[i].x += (positions[i].x - mouseX) * 0.05; // pousse le texte
      positions[i].y += (positions[i].y - mouseY) * 0.05;
    }
    text(messages[i], positions[i].x, positions[i].y);
  }
}