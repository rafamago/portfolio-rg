// efeito nav scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 0) return navbar.classList.add('active')
    return navbar.classList.remove('active');
});

// menu mobile
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".navbar__links");
hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// efeito digitação
function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
};

// Função de validação do formulário
function validateForm() {
    let isValid = true;

    // Validação do nome
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.trim() === '') {
        nameError.textContent = 'O nome não pode estar vazio.';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validação do e-mail
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    return isValid;
}

    // Animação do botão ao clicar
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', () => {
        submitBtn.classList.add('clicked');
        setTimeout(() => {
            submitBtn.classList.remove('clicked');
        }, 300);
});
