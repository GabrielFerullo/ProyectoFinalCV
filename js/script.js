//RandomUser/
async function obtenerPerfil() {
  const response = await fetch("https://randomuser.me/api/?gender=male&nat=mx&exc=login&noinfo");
  const datos = await response.json();
  const user = datos.results[0];
  document.getElementById("nombre-principal").innerHTML = user.name.first+" "+user.name.last;
  document.getElementById("nombre").innerHTML = "Nombre: "+user.name.first+" "+user.name.last;
  document.getElementById("email").innerHTML = "Correo electronico: " + user.email;
  document.getElementById("foto").src = user.picture.large;
  document.getElementById("telefono").innerHTML = "Celular: " + user.phone;
  document.getElementById("edad").innerHTML = "Edad: " + user.dob.age;
  document.getElementById("ubicacion").innerHTML = "Ubicación: " + user.location.city + ", " + user.location.country;
}

//Barra navegación/
function toggleNavMenu(closeMenu = false) {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  if (closeMenu) {
    navMenu.classList.remove("nav-menu_visible");
    navToggle.setAttribute("aria-label", "Abrir menú");
  } else {
    navMenu.classList.toggle("nav-menu_visible");
    if (navMenu.classList.contains("nav-menu_visible")) {
      navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
      navToggle.setAttribute("aria-label", "Abrir menú");
    }
  }
}

window.onscroll = function() {
  const navLink = window.scrollY;
  console.log(navLink);
  if(navLink>30){
    const selector = document.getElementById("section"); 
    navLink.className =".nav-menu-link_active"
  }
};


const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", () => toggleNavMenu());

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => toggleNavMenu(true));
});

//Mostrar-Ocultar/
function toggleTextVisibility() {
  const buttons = document.querySelectorAll('.mostrarMas-btn');
  const textElements = document.querySelectorAll('.textOculto');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const textElement = textElements[index];
      textElement.classList.toggle('mostrarTexto');

      const buttonText = button.innerText;
      button.innerText = buttonText === 'Mostrar más' ? 'Mostrar menos' : 'Mostrar más';
    });
  });
}

toggleTextVisibility();

//Scroll hacia arriba/
function scrollTopButton() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 500) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

scrollTopButton(); 

//Imprimir/Guardar PDF/
const imprimirBtn = document.querySelector('.imprimir-Btn');
imprimirBtn.addEventListener('click', printPDF);

function printPDF() {
  window.print();
}