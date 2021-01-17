class Personel {
  constructor(isim, soyisim) {
    this.isim = isim;
    this.soyisim = soyisim;
  }
  kaydet() {
    console.log(`kaydedildi ${this.isim}`);
  }
}

const personel = new Personel("Berkay", "Oruc");

personel.kaydet();
personel.isim = "berkay"
console.log(personel.isim)
