// Botão "Voltar ao Topo"
window.addEventListener("scroll", () => {
    const backToTopButton = document.getElementById("backToTop");
    backToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
});

document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Exibe um alerta ao clicar nos links dos projetos
document.querySelectorAll(".project-link").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Evita o redirecionamento imediato
        alert("Você está sendo redirecionado para o repositório do projeto!");
        window.location.href = link.href; // Redireciona após o alerta
    });
});

// Contador animado
const counter = document.getElementById("counter");
if (counter) {
    const updateCounter = () => {
        const target = +counter.dataset.target;
        const count = +counter.textContent;

        const increment = target / 200;
        if (count < target) {
            counter.textContent = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.textContent = target;
        }
    };
    updateCounter();
}

// Alternância de Modo Escuro/Claro
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const button = document.getElementById("toggleTheme");
    button.textContent = document.body.classList.contains("dark-mode") ? "☀️ Modo Claro" : "🌙 Modo Escuro";
});

// Efeito Fade-in ao rolar a página
const fadeInElements = document.querySelectorAll(".fade-in");

const handleScroll = () => {
    fadeInElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            el.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", handleScroll);
handleScroll(); // Executa ao carregar a página

// Animação de Digitação Melhorada
document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typing");
    const text = "Bem-vindo ao meu portfólio!";
    let index = 0;

    const type = () => {
        if (index < text.length) {
            typingElement.textContent += text[index];
            index++;
            setTimeout(type, 100);
        }
    };

    typingElement.textContent = "";
    type();
});


