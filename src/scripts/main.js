function toggleCardDetails(element) {
    const detailCard = element.parentNode;
    detailCard.querySelector('.detail-card__content-wrap').classList.toggle('detail-card__content-wrap--open');
}

function toggleNavMenu() {
    const navMenu = document.querySelector('.main-nav');
    navMenu.classList.toggle('main-nav--open');
}

function handleClick(Event) {

    function isDetailButton() {
        if (Event.target.classList.contains('detail-card__button')) {
            return true;
        }

        return false;
    }

    if (isDetailButton()) {
        toggleCardDetails(Event.target);
    }

    if (Event.target.classList.contains('menu-trigger')) {
        toggleNavMenu();
    }

    return
}

document.querySelector('body').addEventListener("click", handleClick);