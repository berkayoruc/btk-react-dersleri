// document.getElementById("bio").innerHTML = "Selam gençler"
// var intro1 = document.getElementById("intro1");
// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = intro1.innerHTML;

// var tumListeler = document.getElementsByTagName("ul");
// var sehirler = tumListeler[0];
// var sehirElemanlari = sehirler.getElementsByTagName("li");

// for (i = 0; i < sehirElemanlari.length; i++) {
//   alert(sehirElemanlari[i].innerHTML);
// }

// var classElemanlari = document.getElementsByClassName("intro1");

// alert(classElemanlari[0].innerHTML);

// var queryElemanlari = document.querySelectorAll("p.intro1");
// alert(queryElemanlari.length);

// var isimElemanlari = document.getElementsByName("musteriAdi")
// alert(isimElemanlari[0].value)

// var h1Eleman = document.getElementById("berkay");
// h1Eleman.addEventListener("mouseover", rengiDegistir);
// function rengiDegistir() {
//   document.getElementById("div1").style.backgroundColor = "red";
// }

// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);

var baslik = document.createElement("h2");
var node = document.createTextNode("Hey JS");
baslik.appendChild(node);
var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
// div1.insertBefore(baslik, p2);
div1.replaceChild(baslik, p2);
