// Функция для обновления высоты строк
function updateGridRowHeight() {
    const container = document.querySelector('.grid-container');
    if (container) {
        const containerWidth = container.offsetWidth;
        const style = getComputedStyle(container);
        const columns = style.gridTemplateColumns.split(' ').length;
        const columnWidth = containerWidth / columns;

        // Установка высоты строк, чтобы она соответствовала ширине колонок
        container.style.gridAutoRows = `${columnWidth}px`;
    }
}

// Функция для фильтрации элементов
function filterGridItems(tag) {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        if (item.dataset.tag === tag || tag === 'all') {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Функция для открытия попапа
function openPopup(text) {
    const popupContainer = document.querySelector('.popup-container');
    const popupContent = document.querySelector('.popup-content');
    const popupText = document.querySelector('.popup-text');

    popupText.textContent = text;
    popupContainer.style.display = 'block';
}

// Функция для закрытия попапа
function closePopup() {
    const popupContainer = document.querySelector('.popup-container');
    popupContainer.style.display = 'none';
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', updateGridRowHeight);
window.addEventListener('resize', updateGridRowHeight);

const tagButtons = document.querySelectorAll('.tag-btn');
tagButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterGridItems(button.dataset.tag);
    });
});

const showAllButton = document.querySelector('.show-all-btn');
showAllButton.addEventListener('click', () => {
    filterGridItems('all');
});

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item) => {
    item.addEventListener('click', () => {
        openPopup(item.textContent);
    });
});

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', closePopup);