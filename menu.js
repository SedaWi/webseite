// Menü-Knopf für kleine Bildschirme. Ohne JavaScript bleibt das Menü einfach sichtbar.
(function () {
  var knopf = document.querySelector(".menu-knopf");
  var menu = document.getElementById("hauptmenu");
  if (!knopf || !menu) return;
  knopf.hidden = false;
  document.documentElement.classList.add("js");
  knopf.addEventListener("click", function () {
    var offen = knopf.getAttribute("aria-expanded") === "true";
    knopf.setAttribute("aria-expanded", String(!offen));
    menu.classList.toggle("offen", !offen);
  });
})();
