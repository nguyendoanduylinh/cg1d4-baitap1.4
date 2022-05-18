let sao = [
  "Polaris",
  "Aldebaran",
  "Deneb",
  "Vega",
  "Altair",
  "Dubhe",
  "Regulus",
];
let chomSao = [
  "Ursa Minor",
  "Tarurus",
  "Cygnus",
  "Lyra",
  "Aquila",
  "Ursa Major",
  "Leo",
];

function tim() {
  let tuNhap = document.getElementById("nhap").value;
  let timThay = false;
  for (let i = 0; i < sao.length; i++) {
    if (tuNhap == sao[i]) {
      document.getElementById(
        "ketQua"
      ).innerHTML = `<hr/>Sao ${sao[i]} tương ứng với chòm sao ${chomSao[i]}`;
      timThay = true;
    }
  }
  if (timThay == false) {
    document.getElementById(
      "ketQua"
    ).innerHTML = `<hr/>Không có dữ liệu cho từ bạn vừa nhập`;
  }
}

function xoa() {
  document.getElementById("nhap").value = "";
  document.getElementById("ketQua").innerHTML = "";
}
