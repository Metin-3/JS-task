let ogr1_ad = "Ada";
let ogr1_soyad = "Bilgi";
let ogr1_tarih = "2012";
let ogr1_matematik1 = 70;
let ogr1_matematik2 = 70;
let ogr1_matematik3 = 80;
let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) / 3;

console.log(parseFloat(ogr1_ortalama));
// console.log(typeof ogr1_ortalama);
console.log(ogr1_ortalama >= 50);


let ogr2_ad = "Yigit";
let ogr2_soyad = "Bilgi";
let ogr2_tarih = "2010";
let ogr2_matematik1 = 40;
let ogr2_matematik2 = 40;
let ogr2_matematik3 = 50;
let ogr2_ortalama = (ogr2_matematik1 + ogr2_matematik2 + ogr2_matematik3) / 3;

console.log(parseFloat(ogr2_ortalama));
// console.log(typeof ogr2_ortalama);
console.log(ogr2_ortalama >= 50);




let indikiZaman = new Date().getFullYear();

let ogr1_yas = indikiZaman - parseInt(ogr1_tarih);
let ogr2_yas = indikiZaman - parseInt(ogr2_tarih);

console.log(ogr1_yas);
console.log(ogr2_yas);