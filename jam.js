let caca = 0;

function jamgerak() {
  let kedetik = document.getElementById("det");
  let kemenit = document.getElementById("menit");

  let jamjam = new Date();

  menit = String(jamjam.getMinutes()).padStart(2, "0");
  detik = String(jamjam.getSeconds()).padStart(2, "0");

  kemenit.innerHTML = menit;
  kedetik.innerHTML = detik;
}

function jamjamjam() {
  let keopsi = document.getElementById("opsi");
  let keampera = document.getElementById("pm");
  let kejam = document.getElementById("jam");

  let hahha = new Date();

  jam = String(hahha.getHours()).padStart(2, "0");
  if (caca == 0) {
    kejam.innerHTML = jam;
    keampera.innerHTML = "<p></p>";
  }

  keopsi.addEventListener("change", (event) => {
    selectedOption = event.target.value;

    if (selectedOption == "12") {
      caca = 2;
      if (jam >= 12) {
        kejam.innerHTML = jam - 12;
        keampera.innerHTML = "pm";
      } else {
        keampera.innerHTML = "am";
        kejam.innerHTML = jam;
      }
    } else {
      caca = 2;
      kejam.innerHTML = jam;
      keampera.innerHTML = "<p></p>";
    }
  });
}

setTimeout(jamjamjam, 000),
  setInterval(jamjamjam, 1000),
  setInterval(jamgerak, 1000);
jamgerak();
