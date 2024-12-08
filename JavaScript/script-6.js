// 1- Bir sayinin 10-50 arsinda olmadigini teyin edin

// let sayi1 = 49;

// if(sayi1 > 10 && sayi1 < 50){
//     console.log("Sayi 10-50 arasindadir.");
// }
// else{
//     console.log("Sayi 10-50 arsinda deyil.");
// }




// 2- Bir sayinin musbet tek sayi olub-olmadigini yoxlayin.

// let sayi = 21;

// if(sayi % 2 == 1 && sayi > 0){
//     console.log("Eded musbet tek ededdir.");
// }




// 3- x, y, z ededlerinin boyukluk qarsilasdirmasini edin.

// let x = 10, y = 20, z = 30;

// if(x > y && x > z){
//     console.log("x en boyuk.");
// }
// else if(y > x && y > z){
//     console.log("y en boyuk.");
// }
// else if(z > x && z > y){
//     console.log("z en boyuk.");
// }
// else{
//     console.log("Ededler beraberdi.");
// }




// 4- 2 vize (40%) final (60%) notuna gore hesablanan oortalama ucun;
  // a- Eger ortalama 50 ve ustundeyse gecti degilse kaldi yazsin
  // b- Gecmek ucun ortalama 50 bele olsa final notu en az 50 olmalidir.
  // c- Finaldan 70 aldiginda ortalama 50-nin altinda olsa bele dersden gecsin.

  let vize1 = 10;
  let vize2 = 10;
  let final = 70;

  let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);

  // a- Eger ortalama 50 ve ustundeyse gecti degilse kaldi yazsin
//   console.log("Ortalamaniz: " + ortalama);

//   if (ortalama >= 50){
//     console.log("Gecdiiz");
//   }
//   else{
//     console.log("Qaldiniz");
//   }





// b- Gecmek ucun ortalama 50 bele olsa final notu en az 50 olmalidir.


// if (ortalama >= 50 && final >= 50){
//    console.log("Gecdiiz");
// }
// else{
//    console.log("Qaldiniz");
// }



// c- Finaldan 70 aldiginda ortalama 50-nin altinda olsa bele dersden gecsin.

if (ortalama >= 50 || final >= 70){
  console.log("Gecdiiz");
}
else{
  console.log("Qaldiniz");
}