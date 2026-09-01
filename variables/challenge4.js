let litres = 35;
let kilometres = 500;
let consomation = (litres/kilometres) * 100;
let consofix = Math.round(consomation * 100)/100;
console.log(`Distance : ${kilometres}\nCarburant : ${litres}\n\nConsommation : ${consofix}/100km`);