const form = document.getElementById('absensiForm');

// Load data dari localStorage
let dataAbsensi = JSON.parse(localStorage.getItem('dataAbsensi')) || [];

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const nama = form.nama.value.trim();
  const nip = form.nip.value.trim();
  const waktu = new Date().toLocaleString();

  if(nama && nip) {
    const record = { nama, nip, waktu };
    dataAbsensi.push(record);
    localStorage.setItem('dataAbsensi', JSON.stringify(dataAbsensi));
    alert("Absensi Berhasil!");
    form.reset();
  }
});
