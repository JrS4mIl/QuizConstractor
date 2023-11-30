function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni=soruMetni;
    this.cevapSecenekleri=cevapSecenekleri;
    this.dogruCevap=dogruCevap


}
Soru.prototype.cevapKontrol=function(cevap){

    return cevap===this.dogruCevap
}

let sorular=[
    new Soru('1-Hangisi Js Paketidir',{a:'Node',b:'TypeScript',c:'Npn'},"c"),
    new Soru('2-Hangisi Py Web Paketidr',{a:'Django',b:'Pandas',c:'Numpy'},"a"),
    new Soru('3-Hangisi Jv Paketidr',{a:'Script',b:'Get',c:'Setter'},"b"),
    new Soru('4-Hangisi Rn Paketidr',{a:'Node',b:'TypeScript',c:'Npn'},"a"),

];