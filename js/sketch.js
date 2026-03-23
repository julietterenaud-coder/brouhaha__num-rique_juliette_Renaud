let data;
let taille= ['grand','moyen','petit']
let angle= ['0','180','360']
let flakes = [];
const NB = 120;

class Flake {
  constructor() {
    this.reset(true);
  }

  reset(init) {
    this.x      = random(width);
    this.y      = init ? random(height) : random(-20, -5);
    this.r      = random(1.5, 4.5);
    this.op     = random(140, 255);
    this.wobble = random(1000);
    this.wAmp   = random(0.3, 1.2);
  }

  update() {
    this.y += 1.5 * (this.r / 3);                           // vitesse prop. à la taille
    this.x += 0.4 + sin(frameCount * 0.02 + this.wobble) * this.wAmp; // vent + oscillation
    if (this.y > height + 10 || this.x < -20 || this.x > width + 20) {
      this.reset(false);
    }
  }

  draw() {
    noStroke();
    fill(220, 235, 255, this.op);
    circle(this.x, this.y, this.r * 2);
  }
}

function preload(){
    data = loadJSON('data.json')
}

function setup(){

     createCanvas(600, 400);
  for (let i = 0; i < NB; i++) flakes.push(new Flake());



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

    luminosite = map(i, smsListe.length,0, 0, 100);

    if(p.hasClass('grand')){
      p.style("color", "hsl(105, 100%, "+luminosite+"%)");
    }
    
  }
 }
 function draw() {
  background(10, 15, 30);
  for (const f of flakes) {
    f.update();
    f.draw();
  }
}