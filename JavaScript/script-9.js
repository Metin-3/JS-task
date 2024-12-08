let url = "https://www.sadikturan.com";
let kursAdi = "Komple Wep Gelisturme Kursu";

// 1- url kac karekterlidir?
let sonuc;

sonuc = url.length;

// 2- kursAdi kac kelemeden olusmaktadir?

sonuc = kursAdi.split(" ").length;

// 3- url https ile mi basliyor?

sonuc = url.startsWith("https");

if(sonuc){
    console.log("evet basliyor.");
}
else
{
    console.log("hayir baslamiyor.");
}


// 4- kursAdi icerisinde Egitimi kelmesi var mi?

if(kursAdi.indexOf("Egitimi") > -1){
    console.log("evet var.");
}
else{
    console.log("hayir yok.")
}



// 5- url ve kursAdidegiskenlerini kullanarak asagidaki string bilgiyi olusturun.
// https://www.sadikturan.com/komple-wep-gek=listirme-kursu

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-");
kursAdi = kursAdi.replaceAll("ş", "s").replaceAll("ı", "i");

sonuc = `${url}/${kursAdi}`;

console.log(sonuc);