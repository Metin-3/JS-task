// 1- "Alma,Armud,Banan,Ciyelek" elemanlarina sahib bir dizi olusturun
let meyveler = ["Alma", "Armud", "Banan", "Ciyelek"];

// 2- Dizi kac elemanlidir?

console.log(meyveler.length);


// 3- Dizinin ilk ve son elemanlarini tazin.

console.log(meyveler[0]);
console.log(meyveler[meyveler.length - 1]);

// 4- Alam dizinin bir elemanidirmi?

console.log(meyveler.includes("Alma"));
console.log(meyveler.indexOf("Alma"));

// 5- Kiraz meyvesini listenin sonuna ekleyiniz
//  meyveler[meyveler.length] = "Kiraz";
//  meyveler[meyveler.length] = "Kiraz";
meyveler.push("Kiraz"); // sona eklemek icin
meyveler.unshift("Kiraz") // evvele eklemek icin
 console.log(meyveler);


 // 6- Diznin son iki elemanini siliniz.

 //meyveler.pop();
 //meyveler.pop();

 meyveler.splice(meyveler.length - 2, 2);
 console.log(meyveler);

 // 7- Asagidaki bilgileri dizi icerisinde saklayiniz ve her ogrecini yasini ve not ortalamasini hesablayiniz.
 /*
    Ogernci 1: Yigit Bilgi 2010 (70,60,80)
    Ogrenci 2: Ada Bilgi 2012 (80,80,90)
    Ogrenci 3; Ahmet Turan 2009 (60,60,70)
*/

let org1 = [
    "Yigit", 
    "Bilgi",
    2010,
    [70,80,90]
];

let org2 = [
    "Ada", 
    "Bilgi",
    2012,
    [80,80,90]
];

let org3 = [
    "Ahmet", 
    "Turan",
    2009,
    [60,60,70]
];

let ogrenciler = [org1, org2, org3];

let yigit_yas = new Date().getFullYear() - ogrenciler[0][2];
let ada_yas = new Date().getFullYear() - ogrenciler[1][2];
let ahmet_yas = new Date().getFullYear() - ogrenciler[2][2];

let yigit_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let ada_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let ahmet_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

console.log(yigit_yas);
console.log(ada_yas);
console.log(ahmet_yas);

console.log(yigit_not);
console.log(ada_not);
console.log(ahmet_not);