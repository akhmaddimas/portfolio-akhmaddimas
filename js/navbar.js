document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav-links');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');  // Menampilkan atau menyembunyikan menu
      burger.classList.toggle('toggle');   // Animasi burger berubah menjadi X
    });
  }
});
