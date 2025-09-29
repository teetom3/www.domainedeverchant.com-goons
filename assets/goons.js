(function () {
  function insertGoonsBanner() {
    if (document.getElementById("goons-banner")) return;

    var banner = document.createElement("div");
    banner.id = "goons-banner";
    banner.innerHTML =
      "" +
      '<div class="goons-inner">' +
      '<span class="goons-logo"><img src="' +
      (window.location.pathname.includes("/fr/") ? "../" : "./") +
      '_img/goons-logo.svg" alt="Goons"></span>' +
      '<span class="goons-text">Propulsé par <strong>Goons</strong> — création & performance web</span>' +
      '<a class="goons-link" href="https://goons.fr/" target="_blank" rel="noopener">Découvrir</a>' +
      "</div>";

    // cible : juste après le header si trouvé, sinon tout en haut du body
    var header = document.querySelector("header#header");
    if (header && header.parentNode) {
      header.insertAdjacentElement("afterend", banner);
    } else {
      document.body.insertBefore(banner, document.body.firstChild);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insertGoonsBanner);
  } else {
    insertGoonsBanner();
  }
})();
