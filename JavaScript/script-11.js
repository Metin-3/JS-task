let simdi = new Date(); //Simdiki saat, tarih


// Get Methods
sonuc = simdi;
sonuc = simdi.getDate();
sonuc = simdi.getDay(); // 0-bazar 1-bazar  ertesi, 2-cersenbe axsami ...... 6-cume ertesi.
sonuc = simdi.getFullYear(); // il
sonuc = simdi.getHours(); // saat
sonuc = simdi.getTime();

// Set Methods
//simdi.setFullYear(2025);
simdi.setMonth(7) // 0-Yanvar 1-Fevral ..... 11-Dekabr.
simdi.setDate(15);

sonuc = simdi;

let dogumTarihi = new Date(2002, 6, 19);

sonuc = simdi.getFullYear()  - dogumTarihi.getFullYear();
sonuc = simdi - dogumTarihi;

let milisecond = simdi - dogumTarihi; // millisecond ile cavab
let saniye = milisecond / 1000; //saniye ile cavab
let dakika = saniye / 60; // deqiqe ile cavab
let saat = dakika / 60; // saat ile cavab
let gun = saat / 24; // gun ile cavab

sonuc = saat
console.log(sonuc);
console.log(typeof sonuc);