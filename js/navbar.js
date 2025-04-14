fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    // Tunggu elemen burger & nav selesai dimuat sebelum dipasang event
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-links');

    if (burger && nav) {
      burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle'); // Untuk animasi burger jadi X
      });
    }
  });
