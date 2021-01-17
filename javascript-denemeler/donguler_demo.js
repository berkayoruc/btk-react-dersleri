var kullanicilar = [
  {
    email: "bir",
    sifre: "12345",
  },
  {
    email: "iki",
    sifre: "123456",
  },
];

var tweets = [
  { email: "bir", tweet: "bu nasıl" },
  { email: "iki", tweet: "bu nasıl bir hava" },
  { email: "bir", tweet: "bu nasıl bir spor" },
];

var email = prompt("email?");
var sifre = prompt("sifre");

function kullaniciKontrol(email, sifre) {
  for (i = 0; i < kullanicilar.length; i++) {
    if (kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) {
      return true;
    }
  }
  return false;
}

function giris() {
  if (kullaniciKontrol(email, sifre)) {
    console.log(tweets);
  } else {
    console.log("Kullanıcı adı ya da şifre hatalı");
  }
}

giris(email, sifre);
