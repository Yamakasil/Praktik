function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        alert('Ви успішно залишили заявку, очікуйте відповідь на протязі 15-20 хвилин. Працюємо з 10:00-20:00.');

        contactForm.reset();
    });
});