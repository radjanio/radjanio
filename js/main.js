// Função para alternar o modo escuro
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Função para o slider de imagens
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
setInterval(() => {
  slides[currentSlide].classList.remove('active-slide');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active-slide');
}, 3000); // Muda a imagem a cada 3 segundos
