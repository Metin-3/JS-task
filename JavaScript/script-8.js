let kursAdi = "Komple Uygulamali Wep Gelistirme Egitimi";

let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[0];
sonuc = kursAdi.slice(0, 6);
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);


sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.substring(10);


sonuc = kursAdi.replace("Egitim", "Kursu");
sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();


sonuc = kursAdi.indexOf("Komple");
sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[0];
sonuc = kursAdi.split(" ")[3]

console.log(sonuc);