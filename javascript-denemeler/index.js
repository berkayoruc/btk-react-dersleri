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

function giris() {
  if (
    (email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) ||
    (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)
  ) {
      console.log(tweets)
  } else {
      console.log("Kullanıcı adı ya da şifre hatalı")
  }
}

giris(email, sifre)
