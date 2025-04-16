const yearEl = document.querySelector(".year");
const curentYear = new Date().getFullYear();
yearEl.textContent = curentYear;

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");

        if (!href.startsWith("#") || href === "#") {
            return;
        }

        e.preventDefault();

        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({
                behavior: "smooth",
            });
        }
    });
});
