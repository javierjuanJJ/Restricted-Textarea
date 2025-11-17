const maxChars = 100;


const textarea = document.getElementById('restricted-textarea');
const charCount = document.getElementById('char-count');

textarea.addEventListener('input', () => {
  let text = textarea.value;

  // Si se excede el límite, recorta el texto
  if (text.length > maxChars) {
    text = text.substring(0, maxChars);
    textarea.value = text;
  }

  // Actualiza contador
  charCount.textContent = `${text.length} / ${maxChars}`;

  // Cambia borde si límite alcanzado
  if (text.length >= maxChars) {
    textarea.classList.add('limit-reached');
  } else {
    textarea.classList.remove('limit-reached');
  }
});
