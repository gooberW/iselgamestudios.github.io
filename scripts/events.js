document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.events-track');
    const container = document.querySelector('.row.events');
    const btnLeft = document.getElementById('event-left');
    const btnRight = document.getElementById('event-right');

    if (!track || !container || !btnLeft || !btnRight) return;

    let offset = 0;

    function getVisibleCount() {
        const containerWidth = container.clientWidth - 32; // subtract padding (2em ≈ 32px)
        const cardWidth = track.children[0]?.getBoundingClientRect().width || 0;
        return cardWidth > 0 ? Math.round(containerWidth / cardWidth) : 4;
    }

    function update() {
        const cards = track.children;
        const total = cards.length;
        const visible = getVisibleCount();

        offset = Math.max(0, Math.min(offset, total - visible));
        const cardWidth = cards[0]?.getBoundingClientRect().width || 0;
        const gap = parseFloat(getComputedStyle(track).gap) || 16;
        track.style.transform = `translateX(-${offset * (cardWidth + gap)}px)`;

        const needsCarousel = total > visible;

        if(!needsCarousel) {
            btnLeft.classList.add('hidden');
            btnRight.classList.add('hidden');
        } else {
            btnLeft.classList.remove('hidden');
            btnRight.classList.remove('hidden');
        }

    }

    btnLeft.addEventListener('click', () => {
        offset = Math.max(0, offset - getVisibleCount());
        update();
    });

    btnRight.addEventListener('click', () => {
        const total = track.children.length;
        offset = Math.min(total - getVisibleCount(), offset + getVisibleCount());
        update();
    });

    update();

    window.addEventListener('resize', () => {
        offset = 0;
        update();
    });
})
