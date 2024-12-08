// yas >= 18
// mezuniyet == "lise" ya da  mezuniyet == "universite"


let mezuniyet = "universite";
let yas = 20;

if(yas >= 18 && (mezuniyet == "lise" || mezuniyet == "universite"))
{
    console.log("ehliyet alabilir");
}
else
{
    console.log("ehliyet sartlari tutmuyor");
}




// and
// true , true => true
// true , false => false


// or
// true , true => true
// true , false => true
//false , false => false