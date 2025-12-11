const PASSWORD = "1";   // >>> GANTI PASSWORD DI SINI <<<

const loginBox = document.getElementById('loginBox');
const dataBox = document.getElementById('dataBox');
const loginBtn = document.getElementById('loginBtn');
const passInput = document.getElementById('passwordInput');
const errMsg = document.getElementById('errorMsg');
const tbody = document.getElementById('dataTbody');

loginBtn.addEventListener('click', function() {
  if (passInput.value === PASSWORD) {
    loginBox.style.display = "none";
    dataBox.style.display = "block";
    loadData();
  } else {
    errMsg.style.display = "block";
  }
});

function loadData() {
  const data = JSON.parse(localStorage.getItem('dataAbsensi')) || [];
  tbody.innerHTML = "";

  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML =
      `<td>${item.nama}</td>
       <td>${item.nip}</td>
       <td>${item.waktu}</td>`;
    tbody.appendChild(row);
  });
}
