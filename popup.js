const iframe = document.querySelector(".popup-iframe");

document.querySelectorAll(".open-popup").forEach(function (button) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        const src = button.dataset.src;
        if (src) {
            const isExternalLink = /^https?:\/\//i.test(src);
            const isGameLink = src === "https://rfmaude.github.io/jeu.github.io/";

            if (isExternalLink && !isGameLink) {
                window.open(src, "_blank", "noopener,noreferrer");
                return;
            }
            iframe.onload = function () {
                iframe.style.opacity = "1";
            };
            iframe.style.opacity = "0";
            iframe.src = ""; // vider l'iframe pour éviter l'effet flash
            setTimeout(function () {
                iframe.src = src;
            }, 50);

        }
        document.getElementById("popup-overlay").classList.add("open");
    });
});

document.getElementById("popup-close").addEventListener("click", function () {
    document.getElementById("popup-overlay").classList.remove("open");
});

