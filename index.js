const abrirMenu = document.getElementById("menu")
const cerrarMenu = document.getElementById("salir")
const barraMenu = document.getElementById("barraMenu")
const linksMenu = document.querySelectorAll(".nav-menu")

function abrirElMenu() {
  // barraMenu.style.display = "block"
  barraMenu.classList.add("active")
  document.body.style.overflow = "hidden"
}

function cerrarElMenu() {
  // barraMenu.style.display = "none"
  barraMenu.classList.remove("active")
  document.body.style.overflow = "auto"
}

const menuQuery = window.matchMedia("(min-width: 930px)")

menuQuery.addEventListener("change", (event) => {
  if (event.matches) {
    cerrarElMenu()
  }
})

abrirMenu.addEventListener("click", abrirElMenu)

cerrarMenu.addEventListener("click", cerrarElMenu)

linksMenu.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault()

    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    const offset = 80; // Altura del menú sticky
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    cerrarElMenu()
  })
})