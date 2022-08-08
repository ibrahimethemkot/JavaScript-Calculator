let sonuc = document.getElementById("inputText");

let hesapla = (number) => {
  sonuc.value = sonuc.value + number;
};

let islem = (number) => {
  sonuc.value = sonuc.value + number;
}

let tamamla = () => {
    sonuc.value = eval(sonuc.value)
}

function temizle() {
  sonuc.value = "";
}

function sil() {
  sonuc.value = sonuc.value.slice(0, -1);
}