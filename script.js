function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni=soruMetni;
    this.cevapSecenekleri=cevapSecenekleri;
    this.dogruCevap=dogruCevap

    console.log(this)
}
Soru.prototype.cevapKontrol=function(cevap){

    return cevap===this.dogruCevap
}
let soru1=new Soru('Hangisi Js Paketidr',{a:'Node',b:'TypeScript',c:'Npn'},"c")
let soru2=new Soru('Hangisi .net Paketidr',{a:'Node',b:'Nuget',c:'Npn'},"b")

let sorular=[
    new Soru('Hangisi Js Paketidr',{a:'Node',b:'TypeScript',c:'Npn'},"c"),
    new Soru('Hangisi Py Paketidr',{a:'Node',b:'TypeScript',c:'Npn'},"c"),
    new Soru('Hangisi Jv Paketidr',{a:'Node',b:'TypeScript',c:'Npn'},"c"),
    new Soru('Hangisi Rn Paketidr',{a:'Node',b:'TypeScript',c:'Npn'},"c"),

]

console.log(soru1.cevapKontrol('c'));