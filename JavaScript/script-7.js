let ad = "Metin";
let soyad = "Hesenov";
let yas = "30";
let sehir = "Quba";


// let mesaj = "Benim adim " + ad + ' ve soyadim ' + soyad + '. ' + sehir + "\'de yasiyorum." + 'Emeklilige ' + (65 - yas) + ' yilim kaldi.';



// backtick
 mesaj = `Benim adim ${ad} ve soyadim ${soyad} . ${sehir}'de yasiyorum. Emeklilige ${65 - yas} yilim kaldi.`;


 // ternary operators
 let emeklilig = (65 - yas > 0) ? "Emeklilige " + (65 - yas) + " yil kaldi." : "Zaten emekli oldunuz.";
 mesaj = `Benim adim ${ad} ve soyadim ${soyad} . ${sehir}'de yasiyorum. ${emeklilig}`;
console.log(mesaj);