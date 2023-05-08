const sections = document.querySelectorAll('section');
const toggles = [];

sections.forEach(section => {
    const h2 = section.querySelector('h2');
    const content = section.querySelector('p');
    const toggle = document.createElement('div');
    toggle.classList.add('toggle');
    toggle.textContent = '+';
    toggle.addEventListener('click', () => {
        if (toggle.textContent === '+') {
            toggle.textContent = '-';
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            toggle.textContent = '+';
            content.style.maxHeight = null;
        }
    });
    h2.appendChild(toggle);
    toggles.push(toggle);
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        toggles.forEach(toggle => {
            toggle.textContent = '+';
            const content = toggle.parentNode.nextElementSibling;
            content.style.maxHeight = null;
        });
    }
});
