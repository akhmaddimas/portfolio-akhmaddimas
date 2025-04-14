fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    navbarPlaceholder.innerHTML = data;

    // Tunggu DOM elemen di dalam navbar dimuat
    requestAnimationFrame(() => {
      const burger = document.getElementById('burger');
      const nav = document.getElementById('nav-links');

      if (burger && nav) {
        burger.addEventListener('click', () => {
          nav.classList.toggle('nav-active');  // Tampilkan/sembunyikan menu
          burger.classList.toggle('toggle');   // Animasi garis berubah jadi X
        });
      }
    });
  })
  .catch(error => {
    console.error("Gagal memuat navbar:", error);
  });
