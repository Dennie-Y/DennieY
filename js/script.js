const yearEl = document.querySelector(".year");
const curentYear = new Date().getFullYear();
yearEl.textContent = curentYear;

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({
                behavior: "smooth",
            });
        }
    });
});
