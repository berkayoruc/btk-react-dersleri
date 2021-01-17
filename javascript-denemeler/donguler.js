for (i = 0; i < 10; i++) {
  console.log(i);
}
var sehirler = ["ank", "ist", "izm", "adana"];

for (i = 0; i < sehirler.length; i++) {
  console.log(sehirler[i]);
}

sehirler.forEach((sehir) => {
  console.log(sehir);
});
