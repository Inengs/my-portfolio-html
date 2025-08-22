document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behaviour: 'smooth'
        })
    })
})


const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// // Slider controls + optional autoplay
// (function () {
//     const track = document.querySelector('.track');
//     const prev = document.querySelector('.prev');
//     const next = document.querySelector('.next');

//     function slide(direction = 1) {
//         const card = track.querySelector('.card');
//         if (!card) return;
//         const gap = parseFloat(getComputedStyle(track).gap) || 16;
//         const cardWidth = card.getBoundingClientRect().width + gap;
//         track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
//     }

//     prev.addEventListener('click', () => slide(-1));
//     next.addEventListener('click', () => slide(1));

//     // Keyboard support on the carousel region
//     track.addEventListener('keydown', (e) => {
//         if (e.key === 'ArrowLeft') { e.preventDefault(); slide(-1); }
//         if (e.key === 'ArrowRight') { e.preventDefault(); slide(1); }
//     });

//     // Autoplay (pause on hover/focus)
//     let autoplay = setInterval(() => slide(1), 4500);
//     function pause() { clearInterval(autoplay); autoplay = null; }
//     function resume() { if (!autoplay) autoplay = setInterval(() => slide(1), 4500); }

//     track.addEventListener('mouseenter', pause);
//     track.addEventListener('mouseleave', resume);
//     track.addEventListener('focusin', pause);
//     track.addEventListener('focusout', resume);

//     // Stop autoplay if user prefers reduced motion
//     const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
//     if (mq.matches) pause();
//     mq.addEventListener?.('change', e => e.matches ? pause() : resume());
// })();
