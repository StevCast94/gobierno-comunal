// Oculta el encabezado al bajar y lo muestra al subir (solo afecta en móvil vía CSS).
(function () {
  var header = document.querySelector("header");
  if (!header) return;
  var ultimo = 0;
  window.addEventListener("scroll", function () {
    var y = window.scrollY || window.pageYOffset;
    if (y > 120 && y > ultimo) {
      header.classList.add("header-hidden");
    } else {
      header.classList.remove("header-hidden");
    }
    ultimo = y;
  }, { passive: true });
})();
